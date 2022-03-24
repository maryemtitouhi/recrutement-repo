package com.ant.recrutement.controllers;
import com.ant.recrutement.entities.TypePoste;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.TypePostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/typePost")
public class TypePostController {
    @Autowired
    private TypePostService typePosteService;

    @GetMapping
    public List<TypePoste> findAll() {
        return typePosteService.findAll();
    }
    @PostMapping
    public MessageResponse save(@RequestBody TypePoste typePoste) {
        return  typePosteService.save(typePoste);
    }

    @PutMapping
    public MessageResponse update(@RequestBody TypePoste typePoste) {
        return  typePosteService.update(typePoste);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Integer id) {
        return  typePosteService.delete(id);
    }
}
