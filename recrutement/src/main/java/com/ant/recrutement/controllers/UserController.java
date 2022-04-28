package com.ant.recrutement.controllers;

import com.ant.recrutement.requests.PasswordRequest;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PutMapping("/change-password")
    public MessageResponse changePassword(@RequestBody PasswordRequest passwordRequest) {
        return userService.changePassword(passwordRequest);
    }
}
