package com.ant.recrutement.services;
import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.Competence;
import com.ant.recrutement.repositories.CompetenceRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CompetenceService {
    @Autowired
    private CompetenceRepository competenceRepository;

    public MessageResponse save(Competence competence) {

        competenceRepository.save(competence);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(Competence competence) {

        competenceRepository.save(competence);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {


        competenceRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<Competence> findByCv(Integer idCv) {
        Cv cv = new Cv();
        cv.setId(idCv);
        return competenceRepository.findByCv(cv);
    }

}
