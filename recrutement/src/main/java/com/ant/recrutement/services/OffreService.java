package com.ant.recrutement.services;

import com.ant.recrutement.entities.Offre;
import com.ant.recrutement.repositories.OffreRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class OffreService {

    @Autowired
    private OffreRepository offreRepository;

    public MessageResponse save(MultipartFile file, Offre offre) throws IOException {
        offre.setImage(file.getBytes());
        offre.setEtat(true);
        offre.setDateCreation(new Date());
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MONTH, 1);
        offre.setDateExpiration(calendar.getTime());
        offreRepository.save(offre);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse update(MultipartFile file, Offre offre) throws IOException {
        if(!file.isEmpty()){
            offre.setImage(file.getBytes());
        }


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

    public MessageResponse changEtat(Integer id) {

        Offre offre = offreRepository.findById(id).orElse(null);
        offre.setEtat(!offre.isEtat());
        offreRepository.save(offre);

        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }



    public List<Offre> findBySociete(Integer societeId){
        return  offreRepository.findBySociete_id(societeId);
    }


    public List<Offre> findAvailable(){
        return  offreRepository.findByEtatAndDateExpirationLessThanEqual(true, new Date());
    }

    public Offre findById(Integer id) {
        return offreRepository.findById(id).orElse(null);
    }
}
