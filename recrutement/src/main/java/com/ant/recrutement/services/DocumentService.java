package com.ant.recrutement.services;

import com.ant.recrutement.entities.CentreInteret;
import com.ant.recrutement.entities.Cv;
import com.ant.recrutement.entities.Document;
import com.ant.recrutement.enums.TypeDocument;
import com.ant.recrutement.repositories.CVRepository;
import com.ant.recrutement.repositories.DocumentRepository;
import com.ant.recrutement.responses.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepository;
    @Autowired
    private CVRepository cvRepository;

    public MessageResponse uploadCv(MultipartFile file, Integer cvId) throws IOException {

        Cv cv = cvRepository.findById(cvId).orElse(null);

        if(cv== null){
            return  new MessageResponse(false, "Attention", "Cv n'existe pas");
        }

        Document document = documentRepository.findByCvAndTypeDocument(cv, TypeDocument.CV)
                .orElse(new Document());
        document.setFichier(file.getBytes());
        document.setContentType(file.getContentType());
        document.setCv(cv);
        document.setTypeDocument(TypeDocument.CV);
        document.setLibelle("CV_"+ cv.getCandidat().getNom() + "_"+ cv.getCandidat().getPrenom());

        documentRepository.save(document);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }


    public MessageResponse uploadLettre(MultipartFile file, Integer cvId) throws IOException {

        Cv cv = cvRepository.findById(cvId).orElse(null);

        if(cv== null){
            return  new MessageResponse(false, "Attention", "Cv n'existe pas");
        }

        Document document = documentRepository.findByCvAndTypeDocument(cv, TypeDocument.LETTRE_MOTIVATION)
                .orElse(new Document());
        document.setFichier(file.getBytes());
        document.setContentType(file.getContentType());
        document.setCv(cv);
        document.setTypeDocument(TypeDocument.LETTRE_MOTIVATION);
        document.setLibelle("LETTRE_MOTIVATION_"+ cv.getCandidat().getNom() + "_"+ cv.getCandidat().getPrenom());

        documentRepository.save(document);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }



    public MessageResponse uploadImage(MultipartFile file, Integer cvId) throws IOException {

        Cv cv = cvRepository.findById(cvId).orElse(null);

        if(cv== null){
            return  new MessageResponse(false, "Attention", "Cv n'existe pas");
        }

        Document document = documentRepository.findByCvAndTypeDocument(cv, TypeDocument.IMAGE)
                .orElse(new Document());
        document.setFichier(file.getBytes());
        document.setContentType(file.getContentType());
        document.setCv(cv);
        document.setTypeDocument(TypeDocument.IMAGE);
        document.setLibelle("IMAGE_"+ cv.getCandidat().getNom() + "_"+ cv.getCandidat().getPrenom());

        documentRepository.save(document);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }

    public List<Document> findByCv(Integer idCv) {
        Cv cv = new Cv();
        cv.setId(idCv);
        return documentRepository.findByCv(cv);
    }
}
