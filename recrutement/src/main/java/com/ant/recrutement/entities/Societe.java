package com.ant.recrutement.entities;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Societe  extends User{


    private String raisonSocial;
    private String matriculeFiscal;
    private String registreCommerce;
    private String taille;
    private String siteWeb;
    @Lob
    private byte [] logo;


    @OneToMany(mappedBy = "societe")
    @JsonIgnore
    private List<Offre> offres;
}
