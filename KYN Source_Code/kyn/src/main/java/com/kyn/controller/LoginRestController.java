package com.kyn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.Dto.LoginResponse;
import com.kyn.entity.User;
import com.kyn.repo.UserRepo;

@RestController
@RequestMapping("/api")
public class LoginRestController {

    @Autowired
    private UserRepo userRepository;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody User loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        // Check if the user with the given email exists in the database
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse(false, "Invalid email or password"));
        }

        // Check if the password matches
        if (user.getPassword().equals(password)) {
            return ResponseEntity.ok(new LoginResponse(true, "Login successful"));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new LoginResponse(false, "Invalid email or password"));
    }
}
