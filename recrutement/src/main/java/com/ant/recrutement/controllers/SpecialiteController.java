package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Specialite;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.SpecialiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/specialite")
public class SpecialiteController {

    @Autowired
    private SpecialiteService specialiteService;

    @GetMapping
    public List<Specialite> findAll() {
        return specialiteService.findAll();
    }
    @PostMapping
    public MessageResponse save(@RequestBody Specialite specialite) {
        return  specialiteService.save(specialite);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Specialite specialite) {
        return  specialiteService.update(specialite);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id) {
        return  specialiteService.delete(id);
    }
}
