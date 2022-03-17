package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Langue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LangueRepository extends JpaRepository<Langue, Integer> {
}