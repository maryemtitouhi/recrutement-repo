package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Candidat;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.CandidatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/candidat")
public class CandidatController {

    @Autowired
    private CandidatService candidatService;
    @GetMapping
    public List<Candidat> findAll() {
        return  candidatService.findAll();
    }

    @PutMapping
    public MessageResponse update(@RequestBody Candidat candidat) {
        return  candidatService.update(candidat);
    }
}
