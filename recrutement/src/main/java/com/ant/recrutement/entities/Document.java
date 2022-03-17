package com.ant.recrutement.entities;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String libelle;
    @Lob
    private byte [] fichier;

    @ManyToOne
    private Cv cv;

}
