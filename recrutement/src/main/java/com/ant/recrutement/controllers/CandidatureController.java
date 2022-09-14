package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Candidature;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.CandidatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/candidature")
public class CandidatureController {
    @Autowired
    private CandidatureService candidatureService;
    @GetMapping("/postule/{candidatId}/{offreId}")
    public MessageResponse postuler(@PathVariable Integer candidatId, @PathVariable Integer offreId) {
        return candidatureService.postuler(candidatId, offreId);
    }


    @GetMapping("/candidat/{candidatId}")
    public List<Candidature> getByCandidat(@PathVariable Integer candidatId) {
        return candidatureService.findByCandidat(candidatId);
    }

    @GetMapping("/offre/{offreId}")
    public List<Candidature> getByOffre(@PathVariable Integer offreId) {
        return candidatureService.findByOffre(offreId);
    }
}
