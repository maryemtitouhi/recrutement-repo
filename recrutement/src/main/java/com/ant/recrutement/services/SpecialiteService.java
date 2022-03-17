package com.ant.recrutement.services;

import com.ant.recrutement.entities.Specialite;
import com.ant.recrutement.repositories.SpecialiteRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecialiteService {
    @Autowired
    private SpecialiteRepository specialiteRepository;

    public MessageResponse save(Specialite specialite) {
        boolean exist = specialiteRepository.existsByLibelle(specialite.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "Spécialité existe déjà");
        }

        specialiteRepository.save(specialite);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(Specialite specialite) {
        boolean exist = specialiteRepository.existsByLibelle(specialite.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "Spécialité existe déjà");
        }

        specialiteRepository.save(specialite);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {

        boolean exist = specialiteRepository.existsByIdAndOffresIsNotNull(id);

        if (exist) {

            return new MessageResponse(false, "Attention", "Spécialité affectée a un ou plusieurs offres");
        }
        specialiteRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<Specialite> findAll() {
        return specialiteRepository.findAll();
    }

}
