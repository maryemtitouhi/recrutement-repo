package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Societe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SocieteRepository extends JpaRepository<Societe, Integer> {
    boolean existsByMatriculeFiscal(String matricule);
    boolean existsByRegistreCommerce(String registre);
}