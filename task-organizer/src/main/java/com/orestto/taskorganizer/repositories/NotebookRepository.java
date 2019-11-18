package com.orestto.taskorganizer.repositories;

import com.orestto.taskorganizer.entities.Notebook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Created by damiass on Nov, 2019
 */
@Repository
public interface NotebookRepository extends JpaRepository<Notebook, Long> {


}
