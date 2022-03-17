package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Competence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompetenceRepository extends JpaRepository<Competence, Integer> {
}