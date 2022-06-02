package com.ant.recrutement.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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

    @JsonIgnore
    @OneToMany(mappedBy = "cv")
    private List<NiveauLangue> niveauLangues;
}
