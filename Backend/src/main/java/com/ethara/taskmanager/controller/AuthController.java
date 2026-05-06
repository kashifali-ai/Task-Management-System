package com.ethara.taskmanager.controller;

import com.ethara.taskmanager.entity.User;
import com.ethara.taskmanager.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")

@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;

    // SIGNUP
    @PostMapping("/signup")
    public User signup(@RequestBody User user) {

        return userService.register(user);
    }

    // LOGIN
    @PostMapping("/login")
    public User login(
            @RequestParam String email,
            @RequestParam String password
    ) {

        return userService.login(email, password);
    }
}