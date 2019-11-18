package com.orestto.taskorganizer.bootstrap;



import com.orestto.taskorganizer.entities.Note;
import com.orestto.taskorganizer.entities.Notebook;
import com.orestto.taskorganizer.repositories.NoteRepository;
import com.orestto.taskorganizer.repositories.NotebookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by damiass on Nov, 2019
 */
@Component
public class LoadData implements CommandLineRunner {


    private NotebookRepository notebookRepository;
    private NoteRepository noteRepository;

    public LoadData(NotebookRepository notebookRepository,
                    NoteRepository noteRepository) {
        this.notebookRepository = notebookRepository;
        this.noteRepository = noteRepository;
    }



    private List<Note> notes = new ArrayList<>();




    @Override
    public void run(String... args) throws Exception {


        var shopping = new Notebook("Shopping", notes);
        var training = new Notebook("training", notes);
        var learning = new Notebook("learning", notes);
        notebookRepository.save(shopping);
        notebookRepository.save(training);
        notebookRepository.save(learning);

        Note note = new Note( "Make shopping", "Take money for shoppping", new Date(), shopping);
        Note note2 = new Note("Tatraman", "Start training for next triathlon :)", new Date(), training);
        Note note3 = new Note("Learning Angular", "Make new project in Angular", new Date(), learning);
        Note note4 = new Note("Note 4", "Check Vue.js", new Date(), learning);
        notes.add(note);
        notes.add(note2);
        notes.add(note3);
        notes.add(note4);

        noteRepository.saveAll(notes);

        System.out.println("Initialized database");

    }
}
























