package com.orestto.taskorganizer.services;


import com.orestto.taskorganizer.controllers.view.NoteViewModel;
import com.orestto.taskorganizer.entities.Note;
import com.orestto.taskorganizer.entities.Notebook;
import com.orestto.taskorganizer.repositories.NoteRepository;
import com.orestto.taskorganizer.repositories.NotebookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;



import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;


import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class NoteServiceTest {

    @Mock
    private NoteRepository noteRepository;
    @Mock
    private NotebookRepository notebookRepository;
    @Mock
    private ModelMapper modelMapper;
    @Mock
    private Note note;
    @Mock
    private NoteViewModel viewModel;
    @Mock
    private Notebook notebook;

    @InjectMocks
    private NoteService service;

    private List<Note> notes;

    @BeforeEach
    void before() {
        modelMapper = new ModelMapper();
        notebook = new Notebook();
        notebook.setId(2L);
        note = new Note();
        note.setId(1L);
        note.setLastModif(new Date());
        note.setText("Title");
        note.setText("Text content");
        note.setNotebook(notebook);

        viewModel.setId("1");
        viewModel.setText("Json Text");
        viewModel.setTitle("Json title");
        viewModel.setNotebookId(String.valueOf(notebook.getId()));
        viewModel.setLastModif(note.getLastModif());
        notes = new ArrayList();
        notes.add(note);
        noteRepository.saveAll(notes);


    }

    @Test
    @DisplayName("Map note entity to DTO note")
    void convertNoteEntity() {
        var returnView = modelMapper.map(note, NoteViewModel.class);
        assertEquals(note.getText(), returnView.getText());
        assertEquals(note.getTitle(), returnView.getTitle());
        assertEquals(note.getLastModif(), returnView.getLastModif());

    }

    @Test
    void convertEntityToViewModel() {
        // given
        Note singleNote = new Note();
        when(noteRepository.findById(1L)).thenReturn(Optional.of(singleNote));

        var returnView = modelMapper.map(note, NoteViewModel.class);

        assertEquals(note.getText(), returnView.getText());
        assertEquals(note.getTitle(), returnView.getTitle());
        assertEquals(note.getLastModif(), returnView.getLastModif());
        // when
        Optional<Note> foundNote = noteRepository.findById(1L);
        assertThat(foundNote.get()).isNotNull();
        // then
        verify(noteRepository).findById(1L);
        verify(noteRepository).findById(anyLong());
    }

    @Test
    @DisplayName("Testing Entity not found - wrong ID")
    void convertEntityToViewModelNotFound() {
        // given
        given(noteRepository.findById(5L)).willThrow(new RuntimeException("Boom"));
        // when
        assertThrows(RuntimeException.class, () -> {
            noteRepository.findById(5L);
        });
        // then
        then(noteRepository).should().findById(5L);
    }


    @Test
    void addNewNote() {
        // given
        Notebook singleNotebook = new Notebook();
        when(notebookRepository.findById(2L)).thenReturn(Optional.of(singleNotebook));
        // when
        Optional<Notebook> foudnote = notebookRepository.findById(2L);
        // then
        verify(notebookRepository).findById(2L);
        assertNotNull(foudnote.get());

    }

}
