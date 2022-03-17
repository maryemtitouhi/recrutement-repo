package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Cv;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CVRepository extends JpaRepository<Cv, Integer> {
}
