package com.orestto.taskorganizer.controllers.view;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * Created by damiass on Nov, 2019
 */
@Getter
@Setter
public class NoteViewModel {

    private String id;

    @NotNull
    @Min(3)
    private String title;

    @NotNull
    private String text;

    @NotNull
    private String notebookId;

    private Date lastModif;




}
