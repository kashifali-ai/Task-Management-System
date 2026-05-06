package com.ethara.taskmanager.service;

import com.ethara.taskmanager.entity.User;
import com.ethara.taskmanager.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // REGISTER USER
    public User register(User user) {

        return userRepository.save(user);
    }

    // LOGIN USER
    public User login(String email, String password) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        if (!user.getPassword().equals(password)) {

            throw new RuntimeException("Invalid Password");
        }

        return user;
    }
}