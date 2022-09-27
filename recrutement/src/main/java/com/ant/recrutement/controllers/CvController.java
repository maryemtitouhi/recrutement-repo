package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.CvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/cv")
public class CvController {

    @Autowired
    private CvService cvService;


    @GetMapping("/candidat/{id}")
    public Cv findByCandidat(@PathVariable Integer id) {
        return  cvService.findByCandidat(id);
    }

    @GetMapping("/{id}")
    public Cv findById(@PathVariable Integer id) {
        return  cvService.findById(id);
    }
    @PostMapping
    public MessageResponse save(@RequestBody Cv cv) {
        return  cvService.save(cv);
    }
}
