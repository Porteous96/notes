import { useState } from 'react';
import { useTextAreaMarkdownEditor } from 'react-mde';
import { commandMap, Commands } from '../../types/editor/Commands';
import MarkdownPreview from './MarkdownPreview';

interface EditorProps {
  currentNote: { body: string };
  updateNote: (value: string) => void;
}

enum EditorModes {
  Preview = 'preview',
  Write = 'write'
}

const Editor = ({ currentNote, updateNote }: EditorProps) => {
  const [selectedTab, setSelectedTab] = useState<EditorModes>(EditorModes.Write);

  const { ref, commandController } = useTextAreaMarkdownEditor({
    commandMap: commandMap
  });

  const createCommandButtons = (commands: Commands[]) => {
    return commands.map((command, index) => {
      return (
        <button
          key={index}
          onClick={async() => {
            await commandController.executeCommand(command);
          }}
        >
          {command}
        </button>
      );
    });
  };

  const commandButtons = createCommandButtons(Object.keys(commandMap) as Commands[]);

  return (
    <section className='pane-editor'>
      <button
        className={selectedTab === EditorModes.Write ? 'selected' : ''}
        onClick={() => setSelectedTab(EditorModes.Write)}
      >
        Draft
      </button>
      <button
        className={selectedTab === EditorModes.Preview ? 'selected' : ''}
        onClick={() => setSelectedTab(EditorModes.Preview)}
      >
        Preview
      </button>
      <br/> {/* remove this br and replace with styling */}
      {commandButtons}
      <div>
        {selectedTab === EditorModes.Write &&
          <textarea
            onChange={(event) => updateNote(event.target.value)}
            ref={ref}
            placeholder="I'm a markdown editor"
            value={currentNote.body}
          />
        }
        {selectedTab === EditorModes.Preview &&
          <MarkdownPreview
            markdown={currentNote.body}
          />
        }
      </div>
    </section>
  );
};

export default Editor;