package com.ant.recrutement.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Ville {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String libelle;
    @ManyToOne
    private Pays pays;

    @JsonIgnore
    @OneToMany(mappedBy = "ville")
    private List<User> users;
}
