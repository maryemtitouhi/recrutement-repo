package com.ant.recrutement.services;

import com.ant.recrutement.entities.Candidat;
import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.Societe;
import com.ant.recrutement.repositories.CVRepository;
import com.ant.recrutement.repositories.CandidatRepository;
import com.ant.recrutement.repositories.SocieteRepository;
import com.ant.recrutement.repositories.UserRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CandidatRepository candidatRepository;
    @Autowired
    private SocieteRepository societeRepository;

    @Autowired
    private CVRepository cvRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public MessageResponse register(Candidat candidat) {

        boolean exist = userRepository.existsByEmail(candidat.getEmail());

        if (exist) {
            return new MessageResponse(false, "Attention", "Email existe déjà");
        }

        String encodedPassword = passwordEncoder.encode(candidat.getPassword());
        candidat.setPassword(encodedPassword);
        candidat.setEnabled(true);
       candidat = candidatRepository.save(candidat);
        Cv cv = new Cv();
        cv.setCandidat(candidat);
        cvRepository.save(cv);
        return new MessageResponse(true, "Succès", "Inscription effectué");
    }


    public MessageResponse register(Societe societe) {

        boolean exist = userRepository.existsByEmail(societe.getEmail());

        if (exist) {
            return new MessageResponse(false, "Attention", "Email existe déjà");
        }
        exist = societeRepository.existsByMatriculeFiscal(societe.getMatriculeFiscal());

        if (exist) {
            return new MessageResponse(false, "Attention", "Matricule fiscale existe déjà");
        }

        exist = societeRepository.existsByRegistreCommerce(societe.getRegistreCommerce());

        if (exist) {
            return new MessageResponse(false, "Attention", "Registre de commerce existe déjà");
        }
        String encodedPassword = passwordEncoder.encode(societe.getPassword());
        societe.setPassword(encodedPassword);
        societe.setEnabled(true);
        societeRepository.save(societe);
        return new MessageResponse(true, "Succès", "Inscription effectué");
    }

}
