package com.ant.recrutement.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class TypePoste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String libelle;


    @JsonIgnore
    @ManyToMany(mappedBy = "typePostes")
    private List<Offre> offres;
}
