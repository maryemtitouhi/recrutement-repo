package com.ant.recrutement.controllers;


import com.ant.recrutement.entities.Experience;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/experience")

public class ExperienceController {
    @Autowired
    private ExperienceService experienceService;


    @GetMapping("/{id}")
    public List<Experience> findByCv(@PathVariable Integer id) {
        return experienceService.findByCv(id);
    }

    @PostMapping
    public MessageResponse save(@RequestBody Experience experience) {
        return experienceService.save(experience);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Experience experience) {
        return experienceService.update(experience);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id) {
        return experienceService.delete(id);
    }
}

