package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Pays;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayRepository extends JpaRepository<Pays, Integer> {

    public boolean existsByLibelle(String libelle);
    boolean existsByIdAndOffresIsNotNull(Integer id);
}
