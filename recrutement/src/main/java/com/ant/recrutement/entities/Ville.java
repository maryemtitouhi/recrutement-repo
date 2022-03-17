package com.ant.recrutement.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Ville {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String libelle;
    @ManyToOne
    private Pays pays;
}
