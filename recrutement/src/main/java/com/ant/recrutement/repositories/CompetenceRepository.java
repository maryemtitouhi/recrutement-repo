package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Competence;
import com.ant.recrutement.entities.Cv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CompetenceRepository extends JpaRepository<Competence, Integer> {
    List<Competence> findByCv(Cv cv);
}