package com.ant.recrutement.services;
import com.ant.recrutement.entities.Pays;
import com.ant.recrutement.entities.Specialite;
import com.ant.recrutement.entities.Ville;
import com.ant.recrutement.repositories.SpecialiteRepository;
import com.ant.recrutement.repositories.VilleRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class VilleService {
    @Autowired
    private VilleRepository villeRepository;

    public MessageResponse save(Ville ville) {
        boolean exist = villeRepository.existsByLibelle(ville.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "ville existe déjà");
        }

        villeRepository.save(ville);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse update(Ville ville) {
        boolean exist = villeRepository.existsByLibelle(ville.getLibelle());

        if (exist) {

            return new MessageResponse(false, "Attention", "Ville existe déjà");
        }

        villeRepository.save(ville);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {

        boolean exist = villeRepository.existsByIdAndUsersIsNotNull(id);

        if (exist) {

            return new MessageResponse(false, "Attention", "Ville affectée a un ou plusieurs Utilisateurs ");
        }
        villeRepository.deleteById(id);

        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<Ville> findAll() {
        return villeRepository.findAll();
    }
    public List<Ville> findByPays(Integer id) {
        Pays pays = new Pays();
        pays.setId(id);
        return villeRepository.findByPays(pays);
    }
}
