package com.orestto.taskorganizer.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


/**
 * Created by damiass on Nov, 2019
 */
@Builder
@Getter
@Setter
@AllArgsConstructor
@Entity(name = "notebook")
@ToString
public class Notebook {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @ToString.Exclude
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "notebook", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Note> notes = new ArrayList<>();

    public Notebook() {

    }
    @Builder
    public Notebook(String name, List<Note> notes) {
        this.name = name;
        this.notes = notes;
    }
}
