import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

import './Editor.scss';


interface EditorProps {
  currentNote: { body: string };
  isEditing: boolean;
  updateNote: (value: string) => void;
}

const Editor = ({ currentNote, isEditing, updateNote }: EditorProps) => {

  return (
    <section className='editor-pane'>
      { isEditing &&
        <MarkdownEditor
          currentNote={currentNote}
          updateNote={updateNote}
        />
      }
      { !isEditing && <MarkdownPreview markdown={currentNote.body} />}
    </section>
  );
};

export default Editor;