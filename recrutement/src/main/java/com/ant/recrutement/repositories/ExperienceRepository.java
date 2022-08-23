package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExperienceRepository extends JpaRepository<Experience, Integer> {
    List<Experience> findByCv(Cv cv);
    List<Experience> findByCvOrderByDebutDesc(Cv cv);
}
