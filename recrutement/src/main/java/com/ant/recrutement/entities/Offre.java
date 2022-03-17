package com.ant.recrutement.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titre;
    private String description;
    private String disponibiite;
    private Integer niveauEtude;
    private Integer niveauExperience;

    @ManyToOne
    private Societe societe;

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(name = "offre_specialites",
            joinColumns = {@JoinColumn(name = "offre_id")},
            inverseJoinColumns = {@JoinColumn(name = "specialite_id")})
    private List<Specialite> specialites;


    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(name = "offre_type_posts",
            joinColumns = {@JoinColumn(name = "offre_id")},
            inverseJoinColumns = {@JoinColumn(name = "type_poste_id")})
    private List<TypePoste> typePostes;


    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(name = "offre_langues",
            joinColumns = {@JoinColumn(name = "offre_id")},
            inverseJoinColumns = {@JoinColumn(name = "langue_id")})
    private List<Langue> langues;


}
