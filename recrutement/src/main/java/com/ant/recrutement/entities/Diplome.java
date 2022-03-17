package com.ant.recrutement.entities;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Diplome {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;
        private String titre;
        private String etablissement;
        private Date debut;
        private Date fin;
        @ManyToOne
        private Cv cv;

    }
