package com.ant.recrutement.controllers;


import com.ant.recrutement.entities.Ville;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.VilleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/ville")

public class VilleController {
    @Autowired
    private VilleService villeService;
    @GetMapping("/pays/{id}")
    public List<Ville> findByPays(@PathVariable Integer id) {
        return villeService.findByPays(id);
    }

    @GetMapping
    public List<Ville> findAll() {
        return villeService.findAll();
    }

    @PostMapping
    public MessageResponse save(@RequestBody Ville ville) {
        return villeService.save(ville);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Ville ville) {
        return villeService.update(ville);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id) {
        return villeService.delete(id);
    }
}

