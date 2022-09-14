package com.ant.recrutement.services;

import com.ant.recrutement.entities.Candidature;
import com.ant.recrutement.entities.CandidatureId;
import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.repositories.CVRepository;
import com.ant.recrutement.repositories.CandidatureRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CandidatureService {

    @Autowired
    private CandidatureRepository candidatureRepository;

    @Autowired
    private CVRepository cvRepository;

    public MessageResponse postuler(Integer candidatId, Integer offreId) {

        Cv cv = cvRepository.findByCandidat_id(candidatId);
        CandidatureId id = new CandidatureId();
        id.setCvId(cv.getId());
        id.setOffreId(offreId);
      Candidature candidature =  candidatureRepository.findById(id).orElse(null);
        if(candidature != null) {
            return  new MessageResponse(false, "Attention", "Vous avez déjà postuler à cet offre");
        }

        candidature = new Candidature();
        candidature.setId(id);
        candidature.setDateCandidature(new Date());
        candidature.setEtat("En attente");
        candidatureRepository.save(candidature);
        return  new MessageResponse(true, "Succès", "Candidature postulée");
    }


    public List<Candidature> findByCandidat(Integer candidatId) {
        return  candidatureRepository.findByCv_candidat_id(candidatId);
    }

    public List<Candidature> findByOffre(Integer offreId) {
        return  candidatureRepository.findByOffre_id(offreId);
    }
}
