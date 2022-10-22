package com.ant.recrutement.services;

import com.ant.recrutement.entities.Offre;
import com.ant.recrutement.entities.Societe;
import com.ant.recrutement.repositories.CandidatRepository;
import com.ant.recrutement.repositories.CandidatureRepository;
import com.ant.recrutement.repositories.OffreRepository;
import com.ant.recrutement.repositories.SocieteRepository;
import com.ant.recrutement.responses.ChartResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
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


    public ChartResponse top5OffreByCompany() {
        ChartResponse chartResponse = new ChartResponse();

     List<Societe> societes=  societeRepository.findTop5Company( PageRequest.of(0, 5)).getContent();

        List<String> labels= new ArrayList<>();
        List<Number> values= new ArrayList<>();

        for (Societe societe: societes) {
            labels.add(societe.getRaisonSocial());
            values.add(societe.getOffres().size());
        }

        chartResponse.setLabels(labels);
        chartResponse.setValues(values);
        return chartResponse;
    }


    public ChartResponse top5CandidatureByCompany() {
        ChartResponse chartResponse = new ChartResponse();

        List<Offre> offres=  offreRepository.findTop5Company( PageRequest.of(0, 5)).getContent();

        List<String> labels= new ArrayList<>();
        List<Number> values= new ArrayList<>();

        for (Offre offre: offres) {
            labels.add(offre.getSociete().getRaisonSocial());
            values.add(offre.getCandidatures().size());
        }

        chartResponse.setLabels(labels);
        chartResponse.setValues(values);
        return chartResponse;
    }

}