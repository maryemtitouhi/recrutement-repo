package com.ant.recrutement.services;
import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.Document;
import com.ant.recrutement.entities.Societe;
import com.ant.recrutement.enums.TypeDocument;
import com.ant.recrutement.repositories.SocieteRepository;
import com.ant.recrutement.repositories.UserRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service

public class SocieteService {
    @Autowired
    private SocieteRepository societeRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Societe> findAll() {
        return societeRepository.findAll();
    }


    public MessageResponse update(Societe societe) {


        boolean exist = userRepository.existsByEmailAndId(societe.getEmail(), societe.getId());
        if(!exist) {
            exist = userRepository.existsByEmail(societe.getEmail());
            if (exist) {
                return new MessageResponse(false, "Attention", "Email existe déjà");
            }
        }


        societeRepository.save(societe);
        return new MessageResponse(true, "Succès", "Opération effectué");

    }


    public MessageResponse uploadLogo(MultipartFile file, Integer societeId) throws IOException {

        Societe societe = societeRepository.findById(societeId).orElse(null);

        if(societe== null){
            return  new MessageResponse(false, "Attention", "Société n'existe pas");
        }


        societe.setLogo(file.getBytes());



        societeRepository.save(societe);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }


}
