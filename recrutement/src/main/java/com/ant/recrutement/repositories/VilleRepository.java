package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Pays;
import com.ant.recrutement.entities.Ville;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VilleRepository extends JpaRepository<Ville, Integer> {

    public boolean existsByLibelle(String libelle);
    boolean existsByIdAndUsersIsNotNull(Integer id);

    List<Ville> findByPays(Pays pays);
}