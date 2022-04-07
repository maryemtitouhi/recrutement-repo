package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Candidat;
import com.ant.recrutement.entities.Societe;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.RegisterService;
import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/candidat")
    public MessageResponse register(@RequestBody  Candidat candidat){
        return  registerService.register(candidat);
    }
    @PostMapping("/societe")
    public MessageResponse register(@RequestBody Societe societe){
        return  registerService.register(societe);
    }
}
