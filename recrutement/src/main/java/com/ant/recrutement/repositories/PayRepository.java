package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Pays;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayRepository extends JpaRepository<Pays, Integer> {
}
