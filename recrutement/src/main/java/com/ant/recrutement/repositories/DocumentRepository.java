package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.Document;
import com.ant.recrutement.enums.TypeDocument;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DocumentRepository extends JpaRepository<Document, Integer> {
    Optional<Document> findByCvAndTypeDocument(Cv cv, TypeDocument typeDocument);

    List<Document> findByCv(Cv cv);
}