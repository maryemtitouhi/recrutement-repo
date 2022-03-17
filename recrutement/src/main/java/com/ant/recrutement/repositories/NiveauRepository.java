package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Niveau;
import com.ant.recrutement.entities.NiveauId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NiveauRepository extends JpaRepository<Niveau, NiveauId> {
}