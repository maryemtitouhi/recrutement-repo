package com.ant.recrutement.requests;

import com.ant.recrutement.entities.Pays;
import lombok.Data;

@Data
public class SearchRequest {

    private String keyword;
    private Pays pays;
    private String disponibilite;

}
