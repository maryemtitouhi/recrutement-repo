package com.ant.recrutement.services;

import com.ant.recrutement.entities.Candidat;
import com.ant.recrutement.entities.Cv;

import com.ant.recrutement.repositories.CVRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CvService {

    @Autowired
    private CVRepository cvRepository;

    public MessageResponse save(Cv cv) {

      cvRepository.save(cv);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }



    public Cv findByCandidat(Integer id) {
        Candidat candidat = new Candidat();
        candidat.setId(id);
        return  this.cvRepository.findByCandidat(candidat);
    }


    public Cv findById(Integer id) {
        return cvRepository.findById(id).orElse(null);
    }
}
