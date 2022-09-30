package com.ant.recrutement.requests;

import com.ant.recrutement.entities.Pays;
import com.ant.recrutement.entities.Specialite;
import com.ant.recrutement.entities.TypePoste;
import lombok.Data;

import java.util.List;

@Data
public class SearchRequest {

    private String keyword;
    private Pays pays;
    private String disponibilite;
    private String niveauEtude;
    private String niveauExperience;
    private List<TypePoste> typePostes;
    private List<Specialite> specialites;

}
