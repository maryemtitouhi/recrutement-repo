package com.ant.recrutement.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
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
    private String niveauEtude;
    private String niveauExperience;
    @Temporal(TemporalType.DATE)
    private Date dateCreation;
    @Temporal(TemporalType.DATE)
    private Date dateExpiration;
    private boolean etat;

    @Lob
    private byte[] image;

    @ManyToOne
    private Societe societe;

    @JsonIgnore
    @OneToMany(mappedBy = "offre")
    private List<Candidature> candidatures;

    @ManyToMany()
    @JoinTable(name = "offre_specialites",
            joinColumns = {@JoinColumn(name = "offre_id")},
            inverseJoinColumns = {@JoinColumn(name = "specialite_id")})
    private List<Specialite> specialites;


    @ManyToMany()
    @JoinTable(name = "offre_type_posts",
            joinColumns = {@JoinColumn(name = "offre_id")},
            inverseJoinColumns = {@JoinColumn(name = "type_poste_id")})
    private List<TypePoste> typePostes;


    @ManyToMany()
    @JoinTable(name = "offre_langues",
            joinColumns = {@JoinColumn(name = "offre_id")},
            inverseJoinColumns = {@JoinColumn(name = "langue_id")})
    private List<Langue> langues;




}
