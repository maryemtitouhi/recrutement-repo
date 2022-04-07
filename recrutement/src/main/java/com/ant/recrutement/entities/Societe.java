package com.ant.recrutement.entities;
import javax.persistence.Entity;
import lombok.Data;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
@Data
public class Societe  extends User{


    private String raisonSocial;
    private String matriculeFiscal;
    private String registreCommerce;
    private String taille;
    private String siteWeb;

}
