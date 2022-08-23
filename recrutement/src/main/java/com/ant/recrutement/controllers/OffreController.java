package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Offre;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.OffreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/offre")
public class OffreController {

    @Autowired
    private OffreService offreService;
    @PostMapping
    public MessageResponse save(@RequestBody Offre offre){
        return offreService.save(offre);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Offre offre){
        return offreService.update(offre);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id){
        return offreService.delete(id);
    }


    @GetMapping("/societe/{id}")
    public List<Offre> findBySociete(@PathVariable Integer id){
        return offreService.findBySociete(id);
    }

    @GetMapping("/available")
    public List<Offre> findAvailable(){
        return offreService.findAvailable();
    }
}
