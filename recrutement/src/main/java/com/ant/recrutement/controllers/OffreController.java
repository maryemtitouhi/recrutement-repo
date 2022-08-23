package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Offre;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.OffreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/offre")
public class OffreController {

    @Autowired
    private OffreService offreService;
    @PostMapping
    public MessageResponse save(@RequestPart("image")MultipartFile file, @RequestPart("offre") Offre offre) throws IOException {
        return offreService.save(file, offre);
    }

    @PutMapping
    public MessageResponse update(@RequestPart("image")MultipartFile file, @RequestPart("offre") Offre offre) throws IOException {
        return offreService.update(file, offre);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id){
        return offreService.delete(id);
    }


    @GetMapping("/societe/{id}")
    public List<Offre> findBySociete(@PathVariable Integer id){
        return offreService.findBySociete(id);
    }

    @GetMapping("/{id}")
    public Offre findById(@PathVariable Integer id){
        return offreService.findById(id);
    }
    @GetMapping("/available")
    public List<Offre> findAvailable(){
        return offreService.findAvailable();
    }

    @GetMapping("/etat/{id}")
    public MessageResponse changeEtat(@PathVariable Integer id){
        return offreService.changEtat(id);
    }
}
