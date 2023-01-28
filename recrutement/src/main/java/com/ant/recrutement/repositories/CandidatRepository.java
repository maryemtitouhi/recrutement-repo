package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Candidat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidatRepository extends JpaRepository<Candidat, Integer> {

}