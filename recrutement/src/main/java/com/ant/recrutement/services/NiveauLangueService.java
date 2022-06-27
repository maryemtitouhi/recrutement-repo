package com.ant.recrutement.services;

import com.ant.recrutement.entities.NiveauLangue;
import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.NiveauLangueId;
import com.ant.recrutement.repositories.NiveauLangueRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class NiveauLangueService {
    @Autowired
    private NiveauLangueRepository niveauLangueRepository;

    public MessageResponse save(NiveauLangue niveauLangue) {
        NiveauLangueId id = new NiveauLangueId();
        id.setLangueId(niveauLangue.getLangue().getId());
        id.setCvId(niveauLangue.getCv().getId());
        niveauLangue.setId(id);
        niveauLangueRepository.save(niveauLangue);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(NiveauLangue niveauLangue) {

        niveauLangueRepository.save(niveauLangue);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer langueId, Integer cvId) {

        NiveauLangueId id = new NiveauLangueId();
        id.setLangueId(langueId);
        id.setCvId(cvId);
        niveauLangueRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<NiveauLangue> findByCv(Integer idCv) {
        Cv cv = new Cv();
        cv.setId(idCv);
        return niveauLangueRepository.findByCv(cv);
    }

}
