import { MouseEvent } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

import { Note } from '../types/Note';

interface SidebarProps {
  notes: Note[];
  currentNote: Note;
  setCurrentNoteId: React.Dispatch<React.SetStateAction<string>>;
  newNote: () => void;
  deleteNote: (event: MouseEvent<HTMLButtonElement>, noteId: string) => void

}

const Sidebar = ({notes, currentNote, setCurrentNoteId, newNote, deleteNote}: SidebarProps) => {
 
 
  const noteElements = notes.map((note) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === currentNote.id ? 'selected-note' : ''
        }`}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <h4 className='text-snippet'>{note.body.split('\n', 1)[0]}</h4>
        <button className='delete-btn' onClick={(event) => deleteNote(event, note.id)}>
          <FaRegTrashAlt className='trash-icon'/>
        </button>
      </div>
    </div>
  ));

  return (
    <section className='pane sidebar'>
      <div className='sidebar--header'>
        <h3>Notes</h3>
        <button className='new-note' onClick={newNote}>+</button>
      </div>
      {noteElements}
    </section>
  );
};

export default Sidebar;
