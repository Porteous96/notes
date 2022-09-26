import Typography from '@material-ui/core/Typography';
import { MouseEvent } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

import { Note } from '../../types/Note';

import './Sidebar.scss';

interface SidebarProps {
  notes: Note[];
  currentNote: Note;
  setCurrentNoteId: React.Dispatch<React.SetStateAction<string>>;
  deleteNote: (event: MouseEvent<HTMLButtonElement>, noteId: string) => void
}

const Sidebar = ({ notes, currentNote, setCurrentNoteId, deleteNote }: SidebarProps) => {
  
  const noteElements = notes.map((note) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === currentNote.id ? 'selected-note' : ''
        }`}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <Typography className='text-snippet' variant='h6'>{note.body.split('\n', 1)[0]}</Typography> {/* Replacing this with typography has broken styling */}
        <button className='delete-btn' onClick={(event) => deleteNote(event, note.id)}>
          <FaRegTrashAlt className='trash-icon'/>
        </button>
      </div>
    </div>
  ));

  return (
    <section className='pane sidebar'>
      {noteElements}
    </section>
  );
};

export default Sidebar;
