package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Langue;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.LangueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/langue")
public class LangueController {

    @Autowired
    private LangueService langueService;

    @GetMapping
    public List<Langue> findAll() {
        return langueService.findAll();
    }
    @PostMapping
    public MessageResponse save(@RequestBody Langue langue) {
        return  langueService.save(langue);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Langue langue) {
        return langueService.update(langue);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id) {
        return  langueService.delete(id);
    }
}


