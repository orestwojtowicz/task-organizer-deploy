package com.orestto.taskorganizer.repositories;

import com.orestto.taskorganizer.entities.Note;
import com.orestto.taskorganizer.entities.Notebook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

/**
 * Created by damiass on Nov, 2019
 */
@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {


    List<Note> findAllByNotebook(Notebook notebook);
}
