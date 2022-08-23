import { Component, OnInit } from '@angular/core';
import {CvService} from '../../../shared/services/cv.service';
import {Cv} from '../../../shared/model/cv';
import {Langue} from '../../../shared/model/langue';
import {NiveauLangue} from '../../../shared/model/niveau-langue';
import {NiveauLangueService} from '../../../shared/services/niveau-langue.service';
import {CentreInteret} from '../../../shared/model/centre-interet';
import {CentreInteretService} from '../../../shared/services/centre-interet.service';
import {DocumentService} from '../../../shared/services/document.service';
import {Document} from '../../../shared/model/document';
import {Diplome} from '../../../shared/model/diplome';
import {DiplomeService} from '../../../shared/services/diplome.service';
import {Experience} from '../../../shared/model/experience';
import {ExperienceService} from '../../../shared/services/experience.service';
import {Competence} from '../../../shared/model/competence';
import {CompetenceService} from '../../../shared/services/competence.service';

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./view-cv.component.scss']
})
export class ViewCvComponent implements OnInit {
  cv = new Cv();
  niveauLangues: NiveauLangue[];
  centreInterets: CentreInteret[];
  imageDoc: Document;
  cvDoc: Document;
  lettreDoc: Document;
  diplomes: Diplome[];
  experiences: Experience[];
  competences: Competence[];
  constructor(private cvService: CvService,
              private centreInteretService: CentreInteretService,
              private documentService: DocumentService,
              private diplomeService: DiplomeService,
              private niveauLangueService: NiveauLangueService,
              private experienceService: ExperienceService,
              private competenceService: CompetenceService,) { }

  ngOnInit(): void {
    const connectedUser = JSON.parse(localStorage.getItem('currentUser'));
    const candidatId = connectedUser.id;
    this.getCvById(candidatId);
  }

  getCvById(id): void {
    this.cvService.getByCandidat(id).subscribe(res => {
      this.cv =res;
      this.getNiveauLangueByCv();
      this.getCentreByByCv();
      this.getDocumentByCv();
      this.getDiplomeByCv();
      this.getExperiencesByCv();
      this.getCompetencesByCv();
    }, ex => console.log(ex));
  }
  getNiveauLangueByCv(): void {
    this.niveauLangueService.getByCv(this.cv.id).subscribe(data => {
      this.niveauLangues = data;
    }, ex => console.log(ex));
  }

  getCentreByByCv(): void {
    this.centreInteretService.getByCv(this.cv.id).subscribe(data => {
      this.centreInterets = data;
    }, ex => console.log(ex));
  }

  getDiplomeByCv(): void {
    this.diplomeService.getByCv(this.cv.id).subscribe(data => {
      this.diplomes = data;
    }, ex => console.log(ex));
  }
  getExperiencesByCv(): void {
    this.experienceService.getByCv(this.cv.id).subscribe(data => {
      this.experiences = data;
    }, ex => console.log(ex));
  }


  getCompetencesByCv(): void {
    this.competenceService.getByCv(this.cv.id).subscribe(data => {
      this.competences = data;
    }, ex => console.log(ex));
  }
  getDocumentByCv(): void {
    this.documentService.getByCv(this.cv.id).subscribe(data => {
      data.forEach(el => {
        if (el.typeDocument === 'CV') {
          this.cvDoc = el;
        }
        else if (el.typeDocument === 'LETTRE_MOTIVATION') {
          this.lettreDoc = el;
        }
        else if (el.typeDocument === 'IMAGE') {
          this.imageDoc = el;
        }
      });
    }, ex => console.log(ex));
  }

}
