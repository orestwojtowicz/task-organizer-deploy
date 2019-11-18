package com.orestto.taskorganizer.controllers;

import com.orestto.taskorganizer.controllers.view.NoteBookViewModel;
import com.orestto.taskorganizer.entities.Notebook;
import com.orestto.taskorganizer.repositories.NotebookRepository;
import io.swagger.annotations.ApiOperation;
import org.modelmapper.ModelMapper;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.List;

/**
 * Created by damiass on Nov, 2019
 */
@RestController
@RequestMapping("/notebooks")
@CrossOrigin
public class NoteBookController {

    private final NotebookRepository notebookRepository;

    public NoteBookController(NotebookRepository notebookRepository) {
        this.notebookRepository = notebookRepository;
    }

    @GetMapping("/all")
    @ApiOperation(value = "${getNotebooks.value}", notes = "${getNotebooks.notes}")
    public List<Notebook> all() {
        var allCategories = this.notebookRepository.findAll();
        return allCategories;
    }

    @PostMapping
    @ApiOperation(value = "${saveNotebook.value}", notes = "${saveNotebook.notes}")
    public Notebook save(@RequestBody NoteBookViewModel noteBookViewModel,
                         BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            throw new ValidationException();
        }
        ModelMapper mapper = new ModelMapper();
        NoteBookViewModel viewModel = mapper.map(noteBookViewModel, NoteBookViewModel.class);
        Notebook notebook = mapper.map(viewModel, Notebook.class);
        notebookRepository.save(notebook);
        return notebook;
    }


    @DeleteMapping("{id}")
    @ApiOperation(value = "${deleteNotebook.value}", notes = "${deleteNotebook.notes}")
    public void delete(@PathVariable Long id) {
        notebookRepository.deleteById(id);
    }


}





















