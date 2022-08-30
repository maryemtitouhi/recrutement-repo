package com.ant.recrutement.services;

import com.ant.recrutement.entities.Offre;
import com.ant.recrutement.repositories.OffreRepository;
import com.ant.recrutement.requests.SearchRequest;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class OffreService {

    @Autowired
    private OffreRepository offreRepository;

    public MessageResponse save(MultipartFile file, Offre offre) throws IOException {

        offre.setImage(file.getBytes());
        offre.setEtat(true);
        offre.setDateCreation(new Date());
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MONTH, 1);
        offre.setDateExpiration(calendar.getTime());
        offreRepository.save(offre);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse update(MultipartFile file, Offre offre) throws IOException {
        if(file !=null && !file.isEmpty()){
            offre.setImage(file.getBytes());
        }


        offreRepository.save(offre);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse delete(Integer id) {

        boolean exist = offreRepository.existsByIdAndCandidaturesNotNull(id);
        if(exist) {
            return  new MessageResponse(false, "Attention", "Offre associée a une ou plusieurs candidatures");
        }
        offreRepository.deleteById(id);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public MessageResponse changEtat(Integer id) {

        Offre offre = offreRepository.findById(id).orElse(null);
        offre.setEtat(!offre.isEtat());
        offreRepository.save(offre);

        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }



    public List<Offre> findBySociete(Integer societeId){
        return  offreRepository.findBySociete_id(societeId);
    }


    public List<Offre> findAvailable(SearchRequest searchRequest){

        Specification<Offre> specification = new Specification<Offre>() {
            @Override
            public Predicate toPredicate(Root<Offre> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                List<Predicate> predicates = new ArrayList<>();

                if ( searchRequest.getDisponibilite() != null && !searchRequest.getDisponibilite().isEmpty()) {
                    predicates.add(criteriaBuilder.equal(root.get("disponibiite"), searchRequest.getDisponibilite()));
                }

                if (searchRequest.getPays()!= null) {
                    Predicate pred1 = criteriaBuilder.equal(root.get("societe").get("ville").get("pays"), searchRequest.getPays());

                    predicates.add(pred1);
                }

                if ( searchRequest.getKeyword() != null && !searchRequest.getKeyword().isEmpty()) {
                    //predicates.add(criteriaBuilder.equal(root.get("disponibiite"), searchRequest.getDisponibilite()));

                  Predicate predicate1=  criteriaBuilder.like((root.get("titre")), "%" + searchRequest.getKeyword()+ "%");
                  Predicate predicate2=  criteriaBuilder.like((root.get("societe").get("raisonSocial")), "%" + searchRequest.getKeyword()+ "%");
                  Predicate predicate3=  criteriaBuilder.in(root.join("specialites").get("libelle")).value(searchRequest.getKeyword());

                 predicates.add( criteriaBuilder.or(predicate1, predicate2 ,predicate3));

                }


                predicates.add(criteriaBuilder.equal(root.get("etat"), true));
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("dateExpiration"), new Date()));

                return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
            }
        };


        return  offreRepository.findAll(specification );
    }

    public Offre findById(Integer id) {
        return offreRepository.findById(id).orElse(null);
    }
}
