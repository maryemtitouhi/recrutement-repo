package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Candidature;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.CandidatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Date;
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

    @GetMapping("/{cvId}/{offreId}")
    public Candidature getById(@PathVariable Integer cvId, @PathVariable Integer offreId) {
        return candidatureService.findById(cvId, offreId);
    }
    @GetMapping("/reject/{cvId}/{offreId}")
    public MessageResponse rejeter(@PathVariable Integer cvId, @PathVariable Integer offreId) {
        return candidatureService.rejeter(cvId, offreId);
    }

    @GetMapping("/accept/{cvId}/{offreId}/{date}")
    public MessageResponse accepter(@PathVariable Integer cvId, @PathVariable Integer offreId,@PathVariable   String date) {

        return candidatureService.accepter(cvId, offreId, date);
    }
}
