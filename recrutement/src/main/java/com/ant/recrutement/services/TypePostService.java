package com.ant.recrutement.services;
import com.ant.recrutement.entities.Specialite;
import com.ant.recrutement.entities.TypePoste;
import com.ant.recrutement.repositories.SpecialiteRepository;
import com.ant.recrutement.repositories.TypePosteRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypePostService {
    @Autowired
    private TypePosteRepository typePosteRepository;

    public MessageResponse save(TypePoste typePoste) {
        boolean exist = typePosteRepository.existsByLibelle(typePoste.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "TypePost existe déjà");
        }

        typePosteRepository.save(typePoste);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(TypePoste typePoste) {
        boolean exist = typePosteRepository.existsByLibelle(typePoste.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "TypePost existe déjà");
        }

        typePosteRepository.save(typePoste);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {

        boolean exist = typePosteRepository.existsByIdAndOffresIsNotNull(id);

        if (exist) {

            return new MessageResponse(false, "Attention", "TypePost affectée ");
        }
        typePosteRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<TypePoste> findAll() {
        return typePosteRepository.findAll();
    }
}
