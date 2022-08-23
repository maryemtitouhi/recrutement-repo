package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Offre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface OffreRepository extends JpaRepository<Offre, Integer> {
    boolean existsByIdAndCandidaturesNotNull(Integer id);

    List<Offre> findBySociete_id(Integer societeId);

    List<Offre> findByEtatAndDateExpirationLessThanEqual(boolean etat, Date date);
}