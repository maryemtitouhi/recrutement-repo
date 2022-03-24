package com.ant.recrutement.services;
import com.ant.recrutement.entities.Pays;
import com.ant.recrutement.entities.Specialite;
import com.ant.recrutement.repositories.PayRepository;
import com.ant.recrutement.repositories.SpecialiteRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaysService {
    @Autowired
    private PayRepository payRepository;

    public MessageResponse save(Pays pays) {
        boolean exist = payRepository.existsByLibelle(pays.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "Pays existe déjà");
        }

        payRepository.save(pays);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(Pays pays) {
        boolean exist = payRepository.existsByLibelle(pays.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "Pays existe déjà");
        }

        payRepository.save(pays);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {

        boolean exist = payRepository.existsByIdAndOffresIsNotNull(id);

        if (exist) {

            return new MessageResponse(false, "Attention", "Pays affectée ");
        }
        payRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<Pays> findAll() {
        return payRepository.findAll();
    }

}
