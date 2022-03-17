package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document, Integer> {
}