package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.NiveauLangue;
import com.ant.recrutement.entities.NiveauLangueId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NiveauLangueRepository extends JpaRepository<NiveauLangue, NiveauLangueId> {
    List<NiveauLangue> findByCv(Cv cv);
}