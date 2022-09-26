import { MouseEvent, useEffect, useState } from 'react';
import Split from 'react-split';
import { nanoid } from 'nanoid';

import Sidebar from './components/sidebar/Sidebar';
import Editor from './components/editor/Editor';
import { Note } from './types/Note';

import './App.scss';
import Header from './components/header/Header';


const App = () => {

  const [notes, setNotes] = useState<Note[]>(() => {
    // Lazily initialise our notes state with notes from localStorage
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  });

  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ''
  );

  const [isEditing, setIsEditing] = useState(true);

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

  const handleModeChange = () => {
    setIsEditing(prevIsEditing => !prevIsEditing);
  };

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
        deleteNote={deleteNote}
      />
      {
        currentNoteId &&
          notes.length > 0 &&
          <Editor
            currentNote={findCurrentNote()}
            isEditing={isEditing}
            updateNote={updateNote}
          />
      }
    </Split>
  );

  return (
    <main>
      <Header
        createNewNote={createNewNote}
        handleModeChange={(handleModeChange)}
        isEditing={isEditing}
      />
      {
        splitLayoutElement
      }
    </main>
  );
};

export default App;
