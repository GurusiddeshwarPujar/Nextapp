'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';

// Import essential core nodes from 'lexical'
import {
  ParagraphNode, // Crucial for basic paragraphs
  TextNode,      // Crucial for plain text content
} from 'lexical';

// Import nodes from specific Lexical packages
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
import { HeadingNode, QuoteNode } from '@lexical/rich-text'; // For H1, H2, etc., and blockquotes
import { TableNode, TableCellNode, TableRowNode } from '@lexical/table'; // If you use tables
import { CodeNode, CodeHighlightNode } from '@lexical/code'; // If you use code blocks

// If you have a custom ImageNode and will re-introduce it later,
// you would put it back here:
// import { ImageNode } from './ImageNode';

import { useEffect, useState } from 'react';
import { SerializedEditorState } from 'lexical';

export default function RichTextRenderer({ data }: { data: SerializedEditorState }) {
  const [initialEditorState, setInitialEditorState] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setInitialEditorState(JSON.stringify(data));
    }
  }, [data]);

  // Don't render anything until the initialEditorState is loaded
  if (!initialEditorState) return null;

  return (
    <LexicalComposer
      initialConfig={{
        editorState: initialEditorState,
        namespace: 'PayloadEditor',
        onError: (error: Error) => { // Keep console.error for debugging
          console.error('Lexical Editor Error:', error);
          // In a production environment, you might send this error to a logging service.
        },
        theme: {}, // Define your CSS classes for Lexical styling here
        nodes: [
          // These are the absolutely essential nodes for most rich text:
          ParagraphNode,
          TextNode,
          HeadingNode, // Needed for headings (H1, H2, etc.)
          // The nodes you already had:
          ListNode,
          ListItemNode,
          LinkNode,
          // Add other common nodes if your Payload CMS rich text uses them:
          QuoteNode,
          TableNode,
          TableCellNode,
          TableRowNode,
          CodeNode,
          CodeHighlightNode,
          // If you re-introduce ImageNode, add it here as well:
          // ImageNode,
          // ... any other custom nodes your Payload CMS rich text field is configured to save
        ],
        editable: false, // Set to false for a read-only renderer (which is typical for display)
      }}
    >
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="editor prose max-w-none text-black" />
        }
        placeholder={null} // No placeholder for a read-only renderer
        ErrorBoundary={LexicalErrorBoundary} // Catches unexpected errors within the editor UI
      />

      {/* HistoryPlugin is typically for editable editors, but harmless in a read-only context */}
      <HistoryPlugin />
    </LexicalComposer>
  );
}