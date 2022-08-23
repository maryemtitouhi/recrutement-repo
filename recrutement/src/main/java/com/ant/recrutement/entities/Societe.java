package com.ant.recrutement.entities;
import javax.persistence.*;

import lombok.Data;

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

}
