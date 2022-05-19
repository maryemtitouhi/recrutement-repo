package com.ant.recrutement.services;
import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.Pays;
import com.ant.recrutement.entities.Diplome;
import com.ant.recrutement.repositories.DiplomeRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class DiplomeService {
    @Autowired
    private DiplomeRepository diplomeRepository;

    public MessageResponse save(Diplome diplome) {

        diplomeRepository.save(diplome);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(Diplome diplome) {

        diplomeRepository.save(diplome);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {


        diplomeRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<Diplome> findByCv(Integer idCv) {
        Cv cv = new Cv();
        cv.setId(idCv);
        return diplomeRepository.findByCv(cv);
    }

}
