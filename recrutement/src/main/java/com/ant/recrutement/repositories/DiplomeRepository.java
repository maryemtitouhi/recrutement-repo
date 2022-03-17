package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Diplome;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiplomeRepository extends JpaRepository<Diplome, Integer> {
}