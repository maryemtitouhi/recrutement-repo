package com.ant.recrutement.entities;

import lombok.Data;

import javax.persistence.Entity;
import java.util.Date;

@Entity
@Data
public class Candidat extends User {
    private String nom;
    private String prenom;
    private Integer niveauEtude;
    private Date dateNaissance;



}
