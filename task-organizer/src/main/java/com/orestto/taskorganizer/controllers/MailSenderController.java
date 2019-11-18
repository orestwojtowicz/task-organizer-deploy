package com.orestto.taskorganizer.controllers;


import com.orestto.taskorganizer.controllers.view.MailSenderViewModel;
import com.orestto.taskorganizer.mail.MailSenderComponent;
import io.swagger.annotations.ApiOperation;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;

/**
 * Created by damiass on Nov, 2019
 */
@RestController
@RequestMapping("/feedback")
@CrossOrigin
public class MailSenderController {

    private MailSenderComponent mailSenderComponent;

    public MailSenderController(MailSenderComponent mailSenderComponent) {
        this.mailSenderComponent = mailSenderComponent;

    }

    @PostMapping
    @ApiOperation(value = "${feedback.value}", notes = "${feedback.notes}")
    public void sendEmail(@RequestBody MailSenderViewModel mailSenderViewModel,
                          BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            throw new ValidationException("Feedback has errors");
        }

        mailSenderComponent.sendFeedBack(mailSenderViewModel.getEmail(),
                mailSenderViewModel.getName(),
                mailSenderViewModel.getContent());

    }

}














