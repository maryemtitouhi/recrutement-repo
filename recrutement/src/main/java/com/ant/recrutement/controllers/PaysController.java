package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Pays;
import com.ant.recrutement.entities.Specialite;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.PaysService;
import com.ant.recrutement.services.SpecialiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/pays")
public class PaysController {

    @Autowired
    private PaysService paysService;

    @GetMapping
    public List<Pays> findAll() {
        return paysService.findAll();
    }
    @PostMapping
    public MessageResponse save(@RequestBody Pays pays) {
        return  paysService.save(pays);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Pays pays) {
        return paysService.update(pays);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id) {
        return  paysService.delete(id);
    }
}


