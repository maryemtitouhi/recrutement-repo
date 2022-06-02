package com.ant.recrutement.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Langue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String libelle;


    @JsonIgnore
    @ManyToMany(mappedBy = "langues")
    private List<Offre> offres;

    @JsonIgnore
    @OneToMany(mappedBy = "langue")
    private List<NiveauLangue> niveauLangues;
}
