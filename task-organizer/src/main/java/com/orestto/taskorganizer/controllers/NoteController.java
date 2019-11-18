package com.orestto.taskorganizer.controllers;

import com.orestto.taskorganizer.controllers.view.NoteViewModel;
import com.orestto.taskorganizer.entities.Note;
import com.orestto.taskorganizer.repositories.NoteRepository;
import com.orestto.taskorganizer.repositories.NotebookRepository;
import com.orestto.taskorganizer.services.NoteService;
import com.orestto.taskorganizer.shared.GeneratorID;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by damiass on Nov, 2019
 */
@RestController
@RequestMapping("/notes")
@Slf4j
@CrossOrigin
public class NoteController extends GeneratorID {

    private NoteRepository noteRepository;
    private NotebookRepository notebookRepository;
    private NoteService noteService;

    public NoteController(NoteRepository noteRepository,
                          NotebookRepository notebookRepository, NoteService noteService) {
        this.noteRepository = noteRepository;
        this.notebookRepository = notebookRepository;
        this.noteService = noteService;

    }



    @PostMapping
    @ApiOperation(value = "${createNote.value}", notes = "${createNote.notes}")
    public Note save(@RequestBody NoteViewModel noteViewModel, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            throw new ValidationException();
        }

        return noteService.addNewNote(noteViewModel);
    }


    @GetMapping("/all")
    @ApiOperation(value = "${allNotes.value}", notes = "${allNotes.notes}")
    public List<NoteViewModel> getAll() {
        var notes = noteRepository.findAll();

        var notesToReturn = notes.stream()
                .map(noteEntity -> noteService.convertNoteEntity(noteEntity))
                .collect(Collectors.toList());
        return notesToReturn;
    }

    @GetMapping("/byid/{id}")
    @ApiOperation(value = "${getNote.value}", notes = "${getNote.notes}")
    public NoteViewModel getSingleNote(@PathVariable Long id) {
        return noteService.convertEntityToViewModel(id);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "${deleteNote.value}", notes = "${deleteNote.notes}")
    public void deleteNote(@PathVariable Long id) {
        noteRepository.deleteById(id);
    }


    @GetMapping("/notebook/{notebookId}")
    @ApiOperation(value = "${getNotebook.value}", notes = "${getNotebook.notes}")
    public List<NoteViewModel> byNotebook(@PathVariable Long notebookId) {
        List<Note> notes = new ArrayList<>();
        var notebook = notebookRepository.findById(notebookId);

        if (notebook.isPresent()) {
           notes = noteRepository.findAllByNotebook(notebook.get());
        }

        var notesToReturn = notes.stream()
                .map(noteEntity -> noteService.convertNoteEntity(noteEntity))
                .collect(Collectors.toList());

        return notesToReturn;

    }


}






























