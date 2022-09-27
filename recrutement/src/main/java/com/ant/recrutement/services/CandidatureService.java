package com.ant.recrutement.services;

import com.ant.recrutement.entities.Candidature;
import com.ant.recrutement.entities.CandidatureId;
import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.repositories.CVRepository;
import com.ant.recrutement.repositories.CandidatureRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Service
public class CandidatureService {

    @Autowired
    private CandidatureRepository candidatureRepository;

    @Autowired
    private CVRepository cvRepository;

    @Autowired
    private EmailService emailService;

    public MessageResponse postuler(Integer candidatId, Integer offreId) {

        Cv cv = cvRepository.findByCandidat_id(candidatId);
        CandidatureId id = new CandidatureId();
        id.setCvId(cv.getId());
        id.setOffreId(offreId);
      Candidature candidature =  candidatureRepository.findById(id).orElse(null);
        if(candidature != null) {
            return  new MessageResponse(false, "Attention", "Vous avez déjà postuler à cet offre");
        }

        candidature = new Candidature();
        candidature.setId(id);
        candidature.setDateCandidature(new Date());
        candidature.setEtat("En attente");
        candidatureRepository.save(candidature);
        return  new MessageResponse(true, "Succès", "Candidature postulée");
    }


    public List<Candidature> findByCandidat(Integer candidatId) {
        return  candidatureRepository.findByCv_candidat_id(candidatId);
    }

    public List<Candidature> findByOffre(Integer offreId) {
        return  candidatureRepository.findByOffre_id(offreId);
    }



    public MessageResponse rejeter(Integer cvId, Integer offreId) {

        CandidatureId id = new CandidatureId();
        id.setCvId(cvId);
        id.setOffreId(offreId);

        Candidature candidature = candidatureRepository.findById(id).orElse(null);

        candidature.setEtat("Rejetée");

        candidatureRepository.save(candidature);
        String subject = "Candidature rejetée";
        String text = "Bonjour " + candidature.getCv().getCandidat().getNom() + " " +candidature.getCv().getCandidat().getPrenom()+"\n" +
                "Nous avons bien reçu votre candidature relative à un poste de "+ candidature.getOffre().getTitre()+ " et nous vous remercions de l’intérêt que vous portez à notre société.\n" +
                "Cependant, malgré l’intérêt que suscite votre candidature, nous sommes au regret de ne pas pouvoir répondre favorablement à votre demande, ne disposant pas dans l’immédiat, de poste correspondant à votre profil.\n" +
                "Nous nous permettons toutefois, sauf avis contraire de votre part, de conserver votre curriculum vitae, afin de pouvoir vous contacter si un poste susceptible de vous intéresser venait à se présenter.\n" +
                "Cordialement,\n" + candidature.getOffre().getSociete().getRaisonSocial();

        emailService.sendEmail(candidature.getCv().getCandidat().getEmail(), subject, text);
        return  new MessageResponse(true, "Succès", "Candidature rejetée");
    }

    public MessageResponse accepter(Integer cvId, Integer offreId, String dateEntretien) {

        LocalDateTime localdatetime = LocalDateTime.parse(dateEntretien);
        Instant instant = localdatetime.atZone(ZoneId.systemDefault()).toInstant();
        Date date = Date.from(instant);

        CandidatureId id = new CandidatureId();
        id.setCvId(cvId);
        id.setOffreId(offreId);

        Candidature candidature = candidatureRepository.findById(id).orElse(null);
        candidature.setDateEntretien(date);
        candidature.setEtat("Acceptée");
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm");
        candidatureRepository.save(candidature);
        String subject = "Candidature Retenu";
        String text = "Bonjour " + candidature.getCv().getCandidat().getNom() + " " +candidature.getCv().getCandidat().getPrenom()+"\n" +
                "A la suite de votre candidaure, nous avons le plaisir de vous informer que votre candidature au poste de "
                + candidature.getOffre().getTitre()+ "  a été retenue.\n" +

                "Afin de procéder à une étude approfondie de votre candidature, nous souhaiterions avoir un entretien complémentaire  avec vous le " + simpleDateFormat.format(date) +".\n" +
                "Merci de participer a cette entretien sous notre plateforme ou en cliquant sur le lien \n" +
                "http://localhost:4200/offre/candidature/meeting/"+ cvId+"/"+offreId +"\n"+

                "Nous vous remercions de bien vouloir prendre contact avec notre service recrutement le plus rapidement possible, afin que nous puissions nous rencontrer.\n" +
                "Nous nous tenons à votre disposition  pour tout/tous renseignement(s) complémentaire(s) qu’il vous plairait de nous demander.\n" +
                "Cordialement,\n" + candidature.getOffre().getSociete().getRaisonSocial();

        emailService.sendEmail(candidature.getCv().getCandidat().getEmail(), subject, text);

        return  new MessageResponse(true, "Succès", "Candidature acceptée");
    }

    public Candidature findById(Integer cvId, Integer offreId) {
        CandidatureId id = new CandidatureId();
        id.setCvId(cvId);
        id.setOffreId(offreId);

        Candidature candidature = candidatureRepository.findById(id).orElse(null);
        return  candidature;
    }
}
