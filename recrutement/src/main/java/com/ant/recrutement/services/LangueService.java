package com.ant.recrutement.services;
import com.ant.recrutement.entities.Langue;
import com.ant.recrutement.repositories.LangueRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LangueService {
    @Autowired
    private LangueRepository langueRepository;

    public MessageResponse save(Langue langue) {
        boolean exist = langueRepository.existsByLibelle(langue.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "Langue existe déjà");
        }

        langueRepository.save(langue);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(Langue langue) {
        boolean exist = langueRepository.existsByLibelle(langue.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "Langue existe déjà");
        }

        langueRepository.save(langue);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {

        boolean exist = langueRepository.existsByIdAndOffresIsNotNull(id);

        if (exist) {

            return new MessageResponse(false, "Attention", "Langue affectée a une ou plusieurs offres");
        }


         exist = langueRepository.existsByIdAndNiveauxIsNotNull(id);

        if (exist) {

            return new MessageResponse(false, "Attention", "Langue affectée a un ou plusieurs CV");
        }
        langueRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<Langue> findAll() {
        return langueRepository.findAll();
    }

}
