package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Candidature;
import com.ant.recrutement.entities.CandidatureId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidatureRepository extends JpaRepository<Candidature, CandidatureId> {
}