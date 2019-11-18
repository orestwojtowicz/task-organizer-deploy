package com.orestto.taskorganizer.services;

import com.orestto.taskorganizer.controllers.view.NoteViewModel;
import com.orestto.taskorganizer.entities.Note;
import com.orestto.taskorganizer.repositories.NoteRepository;
import com.orestto.taskorganizer.repositories.NotebookRepository;
import com.orestto.taskorganizer.shared.GeneratorID;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Date;

/**
 * Created by damiass on Nov, 2019
 */
@Service
public class NoteService extends GeneratorID {

    private NoteRepository noteRepository;
    private NotebookRepository notebookRepository;

    public NoteService(NoteRepository noteRepository, NotebookRepository notebookRepository) {
        this.noteRepository = noteRepository;
        this.notebookRepository = notebookRepository;

    }

    public NoteViewModel convertNoteEntity(Note entity) {

        ModelMapper modelMapper = new ModelMapper();
        NoteViewModel viewModel = modelMapper.map(entity, NoteViewModel.class);
        viewModel.setTitle(entity.getTitle());
        viewModel.setId(entity.getId().toString());
        viewModel.setLastModif(entity.getLastModif());
        viewModel.setText(entity.getText());
        viewModel.setNotebookId(entity.getNotebook().getId().toString());

        return viewModel;
    }



    public NoteViewModel convertEntityToViewModel(Long id) {

        var singleNotebook = noteRepository.findById(id);
        if (singleNotebook.isEmpty()) {
            throw new EntityNotFoundException();
        }
        ModelMapper modelMapper = new ModelMapper();
        NoteViewModel viewModel = modelMapper.map(singleNotebook, NoteViewModel.class);

        viewModel.setId(randomIdNotes(10));
        viewModel.setTitle(singleNotebook.get().getTitle());
        viewModel.setText(singleNotebook.get().getText());
        viewModel.setNotebookId(singleNotebook.get().getNotebook().getId().toString());
        viewModel.setLastModif(new Date());

        return viewModel;

    }

    public Note addNewNote(NoteViewModel noteViewModel) {
        var notebook = notebookRepository.findById(Long.valueOf(noteViewModel.getNotebookId()));
        // skopiowac z viewModel do entity
        ModelMapper modelMapper = new ModelMapper();
        Note returnNewNote = modelMapper.map(noteViewModel, Note.class);
        returnNewNote.setTitle(noteViewModel.getTitle());
        returnNewNote.setLastModif(new Date());
        returnNewNote.setNotebook(notebook.get());
        returnNewNote.setText(noteViewModel.getText());
        noteRepository.save(returnNewNote);

        return returnNewNote;
    }




}
