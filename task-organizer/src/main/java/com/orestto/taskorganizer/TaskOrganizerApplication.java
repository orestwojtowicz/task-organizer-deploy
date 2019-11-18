package com.orestto.taskorganizer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
public class TaskOrganizerApplication  {

	public static void main(String[] args) {
		SpringApplication.run(TaskOrganizerApplication.class, args);
	}
}
