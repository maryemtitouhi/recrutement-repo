package com.ant.recrutement.controllers;

import com.ant.recrutement.entities.Document;
import com.ant.recrutement.responses.MessageResponse;
import com.ant.recrutement.services.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/documents")
public class DocumentController {
    @Autowired
    private DocumentService documentService;


    @PostMapping("/upload/cv/{cvId}")
    public MessageResponse uploadCv(@RequestParam("cv") MultipartFile cv, @PathVariable Integer cvId) throws IOException {
        return documentService.uploadCv(cv, cvId);
    }

    @PostMapping("/upload/lettre/{cvId}")
    public MessageResponse uploadLettre(@RequestParam("lettre") MultipartFile cv, @PathVariable Integer cvId) throws IOException {
        return documentService.uploadLettre(cv, cvId);
    }


    @GetMapping("/{id}")
    public List<Document> findByCv(@PathVariable Integer id) {
        return documentService.findByCv(id);
    }
}
