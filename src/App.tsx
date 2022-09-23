import { MouseEvent, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/editor/Editor';
import Split from 'react-split';
import {nanoid} from 'nanoid';
import { Note } from './types/Note';

import './App.css';

const App = () => {

  const [notes, setNotes] = useState<Note[]>(() => {
    // Lazily initialise our notes state with notes from localStorage
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  });

  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ''
  );

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNewNote = () => {
    const newNote: Note = {
      id: nanoid(),
      body: '# Type your markdown note\'s title here'
    };
    setNotes(prevNotes => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  };

  const updateNote = (text: string) => {

    setNotes(oldNotes => {
      // When the user updates a note - we move it to the top of the list
      const updatedNotes = [];
      for (const oldNote of oldNotes) {
        if (oldNote.id === currentNoteId) {
          updatedNotes.unshift({ ...oldNote, body: text });
        } else {
          updatedNotes.push(oldNote);
        }
      }

      return updatedNotes;
    });

  };

  const deleteNote = (event: MouseEvent<HTMLButtonElement>, noteId: string) => {
    event.stopPropagation();

    setNotes(prevNotes => prevNotes.filter(prevNote => prevNote.id !== noteId));
  };

  const findCurrentNote = () => {
    return notes.find(note => {
      return note.id === currentNoteId;
    }) || notes[0];
  };

  const noNotesElement = (
    <div className='no-notes'>
      <h1>You have no notes</h1>
      <button
        className='first-note'
        onClick={createNewNote}
      >
        Create one now
      </button>
    </div>
  );

  const splitLayoutElement = (
    <Split
      sizes={[30, 70]}
      direction='horizontal'
      className='split'
    >
      <Sidebar
        notes={notes}
        currentNote={findCurrentNote()}
        setCurrentNoteId={setCurrentNoteId}
        newNote={createNewNote}
        deleteNote={deleteNote}
      />
      {
        currentNoteId &&
          notes.length > 0 &&
          <Editor
            currentNote={findCurrentNote()}
            updateNote={updateNote}
          />
      }
    </Split>
  );

  return (
    <main>
      {
        notes.length > 0 ? splitLayoutElement : noNotesElement
      }
    </main>
  );
};

export default App;
