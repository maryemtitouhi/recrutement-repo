package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.TypePoste;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypePosteRepository extends JpaRepository<TypePoste, Integer> {

    public boolean existsByLibelle(String libelle);
    boolean existsByIdAndOffresIsNotNull(Integer id);
}

