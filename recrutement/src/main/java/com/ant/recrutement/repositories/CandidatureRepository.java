package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Candidature;
import com.ant.recrutement.entities.CandidatureId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CandidatureRepository extends JpaRepository<Candidature, CandidatureId> {
    List<Candidature> findByCv_candidat_id(Integer candidatId);

    List<Candidature> findByOffre_id(Integer offreId);
    @Query("select count(o) from Candidature o where month (o.dateCandidature)=:month and year (o.dateCandidature)= year (current_date)")
    long countByMonth(int month);
    @Query("select count (o) from Candidature o where month (o.dateCandidature)=:month and  o.etat =:etat and year (o.dateCandidature)= year (current_date)")
    long countEtatByMonth(int month, String etat);

}