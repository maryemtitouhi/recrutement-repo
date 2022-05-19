package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.Diplome;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiplomeRepository extends JpaRepository<Diplome, Integer> {
    List<Diplome> findByCv(Cv cv);
}