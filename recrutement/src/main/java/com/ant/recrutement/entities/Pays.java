package com.ant.recrutement.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Pays {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String libelle;
@JsonIgnore
    @OneToMany(mappedBy = "pays")
    private List<Ville> villes;


}
