package com.ant.recrutement.entities;
import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class Competence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titre;
    private String description;
    private int niveau;
    @ManyToOne
    private Cv cv;
}

