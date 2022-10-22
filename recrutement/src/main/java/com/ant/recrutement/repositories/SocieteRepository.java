package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Societe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SocieteRepository extends JpaRepository<Societe, Integer> {
    boolean existsByMatriculeFiscal(String matricule);
    boolean existsByRegistreCommerce(String registre);
@Query("select s from  Societe  s  order by  s.offres.size desc")
Page<Societe> findTop5Company(Pageable pageable);
}