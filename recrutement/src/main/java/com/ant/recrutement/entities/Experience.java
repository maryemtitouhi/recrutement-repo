package com.ant.recrutement.entities;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titre;
    private String societe;
    private String description;
    private Date debut;
    private Date fin;

    @ManyToOne
    private Cv cv;

    @ManyToOne
    private TypePoste typePoste;
}
