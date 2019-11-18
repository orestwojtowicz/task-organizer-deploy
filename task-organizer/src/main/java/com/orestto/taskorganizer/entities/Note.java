package com.orestto.taskorganizer.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

/**
 * Created by damiass on Nov, 2019
 */
@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@Entity(name = "note")
public class Note {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String text;
    private Date lastModif;

    @ToString.Exclude
    @ManyToOne(fetch = FetchType.LAZY)
    private Notebook notebook;


    public Note(String title, String text, Date lastModif, Notebook notebook) {
        this.title = title;
        this.text = text;
        this.lastModif = lastModif;
        this.notebook = notebook;
    }

    public Note() {
}

}
