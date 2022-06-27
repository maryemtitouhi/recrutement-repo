package com.ant.recrutement.controllers;


import com.ant.recrutement.entities.CentreInteret;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.CentreInteretService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/centreInteret")
public class CentreInteretController {
    @Autowired
    private CentreInteretService centreInteretService;


    @GetMapping("/{id}")
    public List<CentreInteret> findByCv(@PathVariable Integer id) {
        return centreInteretService.findByCv(id);
    }

    @PostMapping
    public MessageResponse save(@RequestBody CentreInteret centreInteret) {
        return centreInteretService.save(centreInteret);
    }

    @PutMapping
    public MessageResponse update(@RequestBody CentreInteret centreInteret) {
        return centreInteretService.update(centreInteret);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id) {
        return centreInteretService.delete(id);
    }
}

