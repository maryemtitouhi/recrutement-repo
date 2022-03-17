package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Offre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OffreRepository extends JpaRepository<Offre, Integer> {
}