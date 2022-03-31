package com.ant.recrutement.services;
import com.ant.recrutement.entities.Pays;
import com.ant.recrutement.repositories.PaysRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaysService {
    @Autowired
    private PaysRepository paysRepository;

    public MessageResponse save(Pays pays) {
        boolean exist = paysRepository.existsByLibelle(pays.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "Pays existe déjà");
        }

        paysRepository.save(pays);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(Pays pays) {
        boolean exist = paysRepository.existsByLibelle(pays.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "Pays existe déjà");
        }

        paysRepository.save(pays);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {

        boolean exist = paysRepository.existsByIdAndVillesIsNotNull(id);

        if (exist) {

            return new MessageResponse(false, "Attention", "Pays affectée a une ou plusieurs villes");
        }
        paysRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<Pays> findAll() {
        return paysRepository.findAll();
    }

}
