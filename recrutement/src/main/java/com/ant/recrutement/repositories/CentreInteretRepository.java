package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.CentreInteret;
import com.ant.recrutement.entities.Cv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CentreInteretRepository extends JpaRepository<CentreInteret, Integer> {
    List<CentreInteret> findByCv(Cv cv);
}
