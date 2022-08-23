package com.ant.recrutement.services;

import com.ant.recrutement.entities.Offre;
import com.ant.recrutement.repositories.OffreRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OffreService {

    @Autowired
    private OffreRepository offreRepository;

    public MessageResponse save(Offre offre) {
        offre.setEtat(true);
        offre.setDateCreation(new Date());
        offreRepository.save(offre);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse update(Offre offre) {

        offre.setDateCreation(new Date());
        offreRepository.save(offre);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {

        boolean exist = offreRepository.existsByIdAndCandidaturesNotNull(id);
        if(exist) {
            return  new MessageResponse(false, "Attention", "Offre associée a une ou plusieurs candidatures");
        }
        offreRepository.deleteById(id);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public List<Offre> findBySociete(Integer societeId){
        return  offreRepository.findBySociete_id(societeId);
    }


    public List<Offre> findAvailable(){
        return  offreRepository.findByEtatAndDateExpirationLessThanEqual(true, new Date());
    }
}
