package com.ant.recrutement.controllers;

import com.ant.recrutement.responses.ChartResponse;
import com.ant.recrutement.services.StatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/stat")
@CrossOrigin("*")
public class StatController {


    @Autowired
    private StatService statService;
    @GetMapping("/home")
    public List<Long> count() {
        return statService.statHome();
    }

    @GetMapping("/topCompany")
    public ChartResponse topCompany() {
        return statService.top5OffreByCompany();
    }

    @GetMapping("/topCandidature")
    public ChartResponse topCandidature() {
        return statService.top5CandidatureByCompany();
    }


    @GetMapping("/offreCandidatureByMonth")
    public ChartResponse offreCandidatureByMonth() {
        return statService.offreCandidatureByMonth();
    }
}
