package com.orestto.taskorganizer.mail;


import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Component;

/**
 * Created by damiass on Nov, 2019
 */
@Component
public class MailSenderComponent {

    private JavaMailSenderImpl javaMailSender;

    public MailSenderComponent(Environment environment) {
        javaMailSender = new JavaMailSenderImpl();

        javaMailSender.setHost(environment.getProperty("spring.mail.host"));
        javaMailSender.setPort(Integer.parseInt(environment.getProperty("spring.mail.port")));
        javaMailSender.setUsername(environment.getProperty("spring.mail.username"));
        javaMailSender.setPassword(environment.getProperty("spring.mail.password"));
    }


    public void sendFeedBack(String from, String name, String content) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("organizer@task.com");
        message.setSubject("New feedback from " + name);
        message.setText(content);
        message.setFrom(from);
        javaMailSender.send(message);

    }


}
