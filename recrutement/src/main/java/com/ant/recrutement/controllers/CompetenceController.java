package com.ant.recrutement.controllers;


import com.ant.recrutement.entities.Competence;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.CompetenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/competence")

public class CompetenceController {
    @Autowired
    private CompetenceService competenceService;


    @GetMapping("/{id}")
    public List<Competence> findByCv(@PathVariable Integer id) {
        return competenceService.findByCv(id);
    }

    @PostMapping
    public MessageResponse save(@RequestBody Competence competence) {
        return competenceService.save(competence);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Competence competence) {
        return competenceService.update(competence);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id) {
        return competenceService.delete(id);
    }
}

