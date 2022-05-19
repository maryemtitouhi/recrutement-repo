package com.ant.recrutement.entities;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Cv {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @OneToOne
    private Candidat candidat;
    private String titre;
    private String niveauEtude;
    private String anneeExperience;
}
