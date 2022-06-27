package com.ant.recrutement.controllers;


import com.ant.recrutement.entities.NiveauLangue;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.NiveauLangueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/niveauLangue")

public class NiveauLangueController {
    @Autowired
    private NiveauLangueService niveauLangueService;


    @GetMapping("/{id}")
    public List<NiveauLangue> findByCv(@PathVariable Integer id) {
        return niveauLangueService.findByCv(id);
    }

    @PostMapping
    public MessageResponse save(@RequestBody NiveauLangue niveauLangue) {
        return niveauLangueService.save(niveauLangue);
    }

    @PutMapping
    public MessageResponse update(@RequestBody NiveauLangue niveauLangue) {
        return niveauLangueService.update(niveauLangue);
    }

    @DeleteMapping("/{langueId}/{cvId}")
    public MessageResponse delete(@PathVariable Integer langueId, @PathVariable Integer cvId) {
        return niveauLangueService.delete(langueId, cvId);
    }
}

