package com.ant.recrutement.entities;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Inheritance(strategy = InheritanceType.JOINED)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String email;
    private String password;
    private boolean enabled;
    private String addresse;
    private String telephone;
    @ManyToOne
    private Ville ville;


}
