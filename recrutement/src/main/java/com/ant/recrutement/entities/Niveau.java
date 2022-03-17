package com.ant.recrutement.entities;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Niveau {
    @EmbeddedId
    private NiveauId id;
    private Integer note;

    @ManyToOne
    @JoinColumn(name = "cv_id", insertable = false, updatable = false)
    private Cv cv;

    @ManyToOne
    @JoinColumn(name = "langue_id", insertable = false, updatable = false)
    private Langue langue;
}
