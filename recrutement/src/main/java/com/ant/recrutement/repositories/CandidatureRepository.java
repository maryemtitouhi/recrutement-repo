package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Candiadature;
import com.ant.recrutement.entities.CandidatureId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidatureRepository extends JpaRepository<Candiadature, CandidatureId> {
}