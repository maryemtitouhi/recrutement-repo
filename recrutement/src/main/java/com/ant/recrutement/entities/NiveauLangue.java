package com.ant.recrutement.entities;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class NiveauLangue {
    @EmbeddedId
    private NiveauLangueId id;
    private int niveau;
    private String description;

    @ManyToOne
    @JoinColumn(name = "cv_id", insertable = false, updatable = false)
    private Cv cv;

    @ManyToOne
    @JoinColumn(name = "langue_id", insertable = false, updatable = false)
    private Langue langue;
}
