package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Candidature;
import com.ant.recrutement.entities.CandidatureId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CandidatureRepository extends JpaRepository<Candidature, CandidatureId> {
    List<Candidature> findByCv_candidat_id(Integer candidatId);

    List<Candidature> findByOffre_id(Integer offreId);
}