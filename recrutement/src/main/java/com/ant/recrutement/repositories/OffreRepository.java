package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Offre;
import com.ant.recrutement.entities.Societe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface OffreRepository extends JpaRepository<Offre, Integer> {
    boolean existsByIdAndCandidaturesNotNull(Integer id);

    List<Offre> findBySociete_id(Integer societeId);

    List<Offre> findByEtatAndDateExpirationLessThanEqual(boolean etat, Date date);

    List<Offre> findByEtatAndDateExpirationGreaterThanEqual(boolean b, Date date);

    List<Offre> findAll(Specification<Offre> specification);
    @Query("select s from  Offre  s group by s.societe order by  s.candidatures.size desc")
    Page<Offre> findTop5Company(Pageable pageable);

}