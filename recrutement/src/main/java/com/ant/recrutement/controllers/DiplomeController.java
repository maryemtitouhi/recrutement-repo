package com.ant.recrutement.controllers;


import com.ant.recrutement.entities.Diplome;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.DiplomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/diplome")

public class DiplomeController {
    @Autowired
    private DiplomeService diplomeService;


    @GetMapping("/{id}")
    public List<Diplome> findByCv(@PathVariable Integer id) {
        return diplomeService.findByCv(id);
    }

    @PostMapping
    public MessageResponse save(@RequestBody Diplome diplome) {
        return diplomeService.save(diplome);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Diplome diplome) {
        return diplomeService.update(diplome);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id) {
        return diplomeService.delete(id);
    }
}

