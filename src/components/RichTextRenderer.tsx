'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';

import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';

import { useEffect, useState } from 'react';

import { SerializedEditorState } from 'lexical';

export default function RichTextRenderer({ data }: { data: SerializedEditorState }) {
  const [initialEditorState, setInitialEditorState] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setInitialEditorState(JSON.stringify(data));
    }
  }, [data]);

  if (!initialEditorState) return null;

  return (
    <LexicalComposer
      initialConfig={{
        editorState: initialEditorState,
        namespace: 'PayloadEditor',
        onError: console.error,
        theme: {},
        nodes: [ListNode, ListItemNode, LinkNode],
        editable: false,
      }}
    >
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="editor prose max-w-none text-black" />
        }
        placeholder={null}
        ErrorBoundary={LexicalErrorBoundary}
      />

      <HistoryPlugin />
    </LexicalComposer>
  );
}
