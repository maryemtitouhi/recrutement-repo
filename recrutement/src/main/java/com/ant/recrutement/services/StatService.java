package com.ant.recrutement.services;

import com.ant.recrutement.repositories.CandidatRepository;
import com.ant.recrutement.repositories.CandidatureRepository;
import com.ant.recrutement.repositories.OffreRepository;
import com.ant.recrutement.repositories.SocieteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StatService {
    @Autowired
    private CandidatRepository candidatRepository;
    @Autowired
    private OffreRepository offreRepository;

    @Autowired
    private SocieteRepository societeRepository;

    @Autowired
    private CandidatureRepository candidatureRepository;

    public List<Long> statHome() {

        List<Long> values = new ArrayList<>();
        values.add(candidatRepository.count());
        values.add(offreRepository.count());
        values.add(candidatureRepository.count());
        values.add(societeRepository.count());
        return  values ;

    }

}
