package com.ant.recrutement.services;
import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.Experience;
import com.ant.recrutement.repositories.ExperienceRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ExperienceService {
    @Autowired
    private ExperienceRepository experienceRepository;

    public MessageResponse save(Experience experience) {

        experienceRepository.save(experience);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(Experience experience) {

        experienceRepository.save(experience);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {


        experienceRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<Experience> findByCv(Integer idCv) {
        Cv cv = new Cv();
        cv.setId(idCv);
        return experienceRepository.findByCv(cv);
    }

}
