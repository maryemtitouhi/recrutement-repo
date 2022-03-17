package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecialiteRepository extends JpaRepository<Specialite, Integer> {

    public boolean existsByLibelle(String libelle);
    boolean existsByIdAndOffresIsNotNull(Integer id);
}