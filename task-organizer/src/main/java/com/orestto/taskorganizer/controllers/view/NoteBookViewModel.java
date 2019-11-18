package com.orestto.taskorganizer.controllers.view;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

/**
 * Created by damiass on Nov, 2019
 */
@Getter
@Setter
@Builder
public class NoteBookViewModel {

    private String id;
    @NotNull
    private String name;
    private int nbNotes;


    @Builder
    public NoteBookViewModel(String id, String name, int nbNotes) {
        this.id = id;
        this.name = name;
        this.nbNotes = nbNotes;
    }





}
