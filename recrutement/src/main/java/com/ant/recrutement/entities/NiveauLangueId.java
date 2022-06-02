package com.ant.recrutement.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class NiveauLangueId implements Serializable {

    @Column(name = "cv_id")
    private Integer cvId;
    @Column(name = "langue_id")
    private Integer langueId;

}
