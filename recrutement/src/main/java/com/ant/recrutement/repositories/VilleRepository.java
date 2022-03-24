package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Ville;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VilleRepository extends JpaRepository<Ville, Integer> {

    public boolean existsByLibelle(String libelle);
    boolean existsByIdAndOffresIsNotNull(Integer id);
}