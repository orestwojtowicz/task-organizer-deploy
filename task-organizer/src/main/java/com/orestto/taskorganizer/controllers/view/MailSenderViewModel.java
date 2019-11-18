package com.orestto.taskorganizer.controllers.view;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
 * Created by damiass on Nov, 2019
 */
@Getter
@Setter
public class MailSenderViewModel {

    @NotNull
    private String name;

    @NotNull
    @Email
    private String email;

    @NotNull
    @Min(10)
    private String content;




}
