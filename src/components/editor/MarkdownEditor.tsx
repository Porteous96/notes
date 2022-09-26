import { CommandMap, supportedCommands } from '../../types/editor/Commands';
import EditorToolbar from './EditorToolbar';
import { useTextAreaMarkdownEditor } from 'react-mde';


interface MarkdownEditorProps {
  currentNote: { body: string };
  updateNote: (value: string) => void;
}

const MarkdownEditor = ({ currentNote, updateNote }: MarkdownEditorProps) => {

  const { ref, commandController } = useTextAreaMarkdownEditor({
    commandMap: CommandMap
  });

  return (
    <div>
      <EditorToolbar commands={supportedCommands} commandController={commandController}/>
      <textarea
        className='markdown-editor'
        onChange={(event) => updateNote(event.target.value)}
        ref={ref}
        rows={50}
        value={currentNote.body}
      />
    </div>
  );
};

export default MarkdownEditor;