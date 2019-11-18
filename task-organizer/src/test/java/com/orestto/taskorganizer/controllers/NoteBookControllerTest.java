package com.orestto.taskorganizer.controllers;


import com.orestto.taskorganizer.controllers.view.NoteBookViewModel;
import com.orestto.taskorganizer.entities.Note;
import com.orestto.taskorganizer.entities.Notebook;
import com.orestto.taskorganizer.repositories.NotebookRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.reset;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(NoteBookController.class)
class NoteBookControllerTest {


    @MockBean
    NotebookRepository notebookRepository;

    @Autowired
    MockMvc mockMvc;

    NoteBookViewModel validNotebook;
    Notebook notebook;
    @MockBean
    List<Notebook> notebooks;
    @MockBean
    List<Note> notes;


    @BeforeEach
    void setUp() {
        validNotebook = NoteBookViewModel.builder()
                .id("5")
                .name("Shopping")
                .nbNotes(2)
                .build();

        notes = new ArrayList<>();


        notebook = Notebook.builder()
                .name("Noote")
                .notes(notes)
                .build();


    }

    @AfterEach
    void tearDown() {
        reset(notebookRepository);
    }


    @Test
    void all() throws Exception{
        given(notebookRepository.findAll()).willReturn(List.of(notebook));
        mockMvc.perform(get("/notebooks/all"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    void delete() throws Exception {
        this.mockMvc.perform(MockMvcRequestBuilders
                .delete("/notebooks/11")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}













