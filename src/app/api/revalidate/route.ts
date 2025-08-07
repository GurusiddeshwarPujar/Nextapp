import { revalidateTag, revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// This should match your secret in Payload CMS webhook config
const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || 'your-secret-key';

export async function POST(request: NextRequest) {
  try {
    // Check for secret to confirm this is a valid revalidation request
    const secret = request.nextUrl.searchParams.get('secret');
    
    if (secret !== REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const body = await request.json();
    console.log('🔄 Revalidation webhook received:', body);

    // Get the collection that was updated
    const collection = body.collection || 'all';
    
    // Revalidate based on collection
    switch (collection) {
      case 'blog':
        revalidateTag('blogs');
        revalidatePath('/blog');
        if (body.doc?.slug) {
          revalidateTag(`blog-${body.doc.slug}`);
          revalidatePath(`/blog/${body.doc.slug}`);
        }
        break;
        
      case 'pages':
        revalidateTag('pages');
        revalidatePath('/');
        if (body.doc?.slug) {
          revalidateTag(`page-${body.doc.slug}`);
          revalidatePath(`/${body.doc.slug}`);
        }
        break;
        
      default:
        // Revalidate everything
        revalidateTag('blogs');
        revalidateTag('pages');
        revalidatePath('/blog');
        revalidatePath('/');
    }

    console.log('✅ Revalidation completed for:', collection);
    
    return NextResponse.json({
      revalidated: true,
      collection,
      timestamp: Date.now(),
    });
    
  } catch (err: unknown) {
    console.error('❌ Revalidation error:', err);
    
    // Safely handle the unknown error type
    let errorMessage = 'Unknown error occurred';
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'string') {
      errorMessage = err;
    }
    
    return NextResponse.json(
      { message: 'Error revalidating', error: errorMessage },
      { status: 500 }
    );
  }
}