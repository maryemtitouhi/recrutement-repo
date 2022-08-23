package com.ant.recrutement.entities;

import lombok.Data;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
@Data
public class Candidature {
    @EmbeddedId
    private CandidatureId id;
    private Date dateCandidature;
    private String etat;

    @ManyToOne
    @JoinColumn(name = "cv_id", insertable = false, updatable = false)
    private Cv cv;

    @ManyToOne
    @JoinColumn(name = "offre_id", insertable = false, updatable = false)
    private Offre offre;

}
