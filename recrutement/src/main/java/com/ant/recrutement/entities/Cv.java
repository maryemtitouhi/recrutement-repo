package com.ant.recrutement.entities;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Cv {

    @Id
    private Integer id;
    @OneToOne
    @PrimaryKeyJoinColumn(name = "id")
    private Candidat candidat;
    private String titre;
    private String anneeExperience;
}
