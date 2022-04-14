package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.User;
import com.ant.recrutement.responses.LoginResponse;
import com.ant.recrutement.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private UserService userService;
    @PostMapping
    public LoginResponse authenticate(@RequestBody User user){
        return  userService.authenticate(user);
    }
}
