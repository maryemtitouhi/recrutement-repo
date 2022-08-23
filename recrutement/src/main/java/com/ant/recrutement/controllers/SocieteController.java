package com.ant.recrutement.controllers;
import com.ant.recrutement.entities.Societe;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.SocieteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/societe")
public class SocieteController {
    @Autowired
    private SocieteService societeService;
    @GetMapping
    public List<Societe> findAll() {
        return  societeService.findAll();
    }

    @PutMapping
    public MessageResponse update(@RequestBody Societe societe) {
        return  societeService.update(societe);
    }

    @PostMapping("/upload/logo/{societeId}")
    public MessageResponse uploadLogo(@RequestParam("image") MultipartFile image, @PathVariable Integer societeId) throws IOException {
        return societeService.uploadLogo(image, societeId);
    }

}

