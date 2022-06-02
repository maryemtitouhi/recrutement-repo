package com.ant.recrutement.services;

import com.ant.recrutement.entities.CentreInteret;
import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.repositories.CentreInteretRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CentreInteretService {
    @Autowired
    private CentreInteretRepository centreInteretRepository;

    public MessageResponse save(CentreInteret centreInteret) {

        centreInteretRepository.save(centreInteret);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(CentreInteret centreInteret) {

        centreInteretRepository.save(centreInteret);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {


        centreInteretRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<CentreInteret> findByCv(Integer idCv) {
        Cv cv = new Cv();
        cv.setId(idCv);
        return centreInteretRepository.findByCv(cv);
    }

}
