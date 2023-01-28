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

    public ChartResponse offreCandidatureByMonth() {
        ChartResponse chartResponse = new ChartResponse();



        List<String> labels= new ArrayList<>();
        labels.add("Janvier");
        labels.add("Féverier");
        labels.add("Mars");
        labels.add("Avril");
        labels.add("Mai");
        labels.add("Juin");
        labels.add("Juillet");
        labels.add("Aout");
        labels.add("Septembre");
        labels.add("Octobre");
        labels.add("Nouvembre");
        labels.add("Décembre");
        List<Number> values= new ArrayList<>();
        List<Number> values2= new ArrayList<>();
        List<Number> values3= new ArrayList<>();
        List<Number> values4= new ArrayList<>();
        List<Number> values5= new ArrayList<>();

        for (int i =1; i<= 12; i++) {
             values.add(offreRepository.countByMonth(i));
            values2.add(candidatureRepository.countByMonth(i));
            values3.add(candidatureRepository.countEtatByMonth(i, "En attente"));
            values4.add(candidatureRepository.countEtatByMonth(i, "Acceptée"));
            values5.add(candidatureRepository.countEtatByMonth(i, "Rejetée"));
        }

        chartResponse.setLabels(labels);
        chartResponse.setValues(values);
        chartResponse.setValues2(values2);
        chartResponse.setValues3(values3);
        chartResponse.setValues4(values4);
        chartResponse.setValues5(values5);
        return chartResponse;
    }

}