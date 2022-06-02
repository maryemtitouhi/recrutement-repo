package com.ant.recrutement.entities;
import com.ant.recrutement.enums.TypeDocument;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String libelle;
    @Enumerated(EnumType.STRING)
    private TypeDocument typeDocument;
    @Lob
    private byte [] fichier;
    private String contentType;


    @ManyToOne
    private Cv cv;

}
