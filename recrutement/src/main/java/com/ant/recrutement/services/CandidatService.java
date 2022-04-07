package com.ant.recrutement.services;

import com.ant.recrutement.entities.Candidat;
import com.ant.recrutement.repositories.CandidatRepository;
import com.ant.recrutement.repositories.UserRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidatService {

    @Autowired
    private CandidatRepository candidatRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Candidat> findAll() {
        return candidatRepository.findAll();
    }


    public MessageResponse update(Candidat candidat) {


        boolean exist = userRepository.existsByEmailAndId(candidat.getEmail(), candidat.getId());
    if(!exist) {
        exist = userRepository.existsByEmail(candidat.getEmail());
        if (exist) {
            return new MessageResponse(false, "Attention", "Email existe déjà");
        }
    }


        candidatRepository.save(candidat);
        return new MessageResponse(true, "Succès", "Opération effectué");

    }

}
