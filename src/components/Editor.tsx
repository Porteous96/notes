import { useState } from 'react';
import ReactMde, { ReactMdeProps } from 'react-mde';
import Showdown from 'showdown';

interface EditorProps {
  currentNote: { body: string};
  updateNote: (value: string) => void;
}

const Editor = ({ currentNote, updateNote }: EditorProps) => {
  const [selectedTab, setSelectedTab] = useState<ReactMdeProps['selectedTab']>('write');

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className='pane editor'>
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={100}
        heightUnits='vh'
      />
    </section>
  );
};

export default Editor;