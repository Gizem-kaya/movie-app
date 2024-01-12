package dev.gizem.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

public class MoviesApplication {

	int a = 5;

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}
}
