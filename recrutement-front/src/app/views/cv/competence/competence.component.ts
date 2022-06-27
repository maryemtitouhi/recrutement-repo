import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../../shared/model/cv';
import {Competence} from '../../../shared/model/competence';
import {TypePoste} from '../../../shared/model/type-poste';
import {CompetenceService} from '../../../shared/services/competence.service';
import {ConfirmationService, MessageService} from 'primeng-lts/api';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';
import {TypePosteService} from '../../../shared/services/type-poste.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {


  @Input() cv: Cv;
  competences: Competence[];
  display = false;
  competence = new Competence();
  constructor(private competenceService: CompetenceService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getByCv();
  }




  getByCv(): void {
    this.competenceService.getByCv(this.cv.id).subscribe(data => {
      this.competences = data;
    }, ex => console.log(ex));
  }

  clickAdd(): void {
    this.display = true;
    this.competence = new Competence();
  }

  clickEdit(spec: Competence): void {
    this.display = true;
    Object.assign(this.competence, spec);
  }

  add(): void {

    this.competence.cv = this.cv;
    this.competenceService.save(this.competence).subscribe(res => {

      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.display = false;
        this.getByCv();
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  update(): void {
    this.competenceService.update(this.competence).subscribe(res => {

      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.display = false;
        this.getByCv();
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  delete(event, id): void {


    this.confirmationService.confirm({
      target: event.target,
      acceptLabel: 'OK',
      rejectLabel: 'Annuler',
      message: 'Vous etes sur de supprimer cet enregistrement?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {


        this.competenceService.delete(id).subscribe(res => {

          if (res.success) {
            this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
            this.getByCv();
          } else {
            this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
          }
        }, ex => {
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
          console.log(ex);
        });
      }
    });
  }

}
