import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../../shared/model/cv';
import {Experience} from '../../../shared/model/experience';
import {ExperienceService} from '../../../shared/services/experience.service';
import {ConfirmationService, MessageService} from 'primeng-lts/api';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';
import {TypePosteService} from '../../../shared/services/type-poste.service';
import {TypePoste} from '../../../shared/model/type-poste';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() cv: Cv;
  experiences: Experience[];
  display = false;
  experience = new Experience();
  minDateFin: any;
  typePostes: TypePoste[];
  constructor(private experienceService: ExperienceService,
              private messageService: MessageService,
              private activatedRoute: ActivatedRoute,
              private datePipe: DatePipe,
              private typePosteService: TypePosteService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
      this.getByCv();
      this.getTypePostes();

  }


  getTypePostes(): void {
    this.typePosteService.getAll().subscribe(data => {
      this.typePostes = data;
    }, ex => console.log(ex));
  }

  getByCv(): void {
    this.experienceService.getByCv(this.cv.id).subscribe(data => {
      this.experiences = data;
    }, ex => console.log(ex));
  }

  clickAdd(): void {
    this.display = true;
    this.experience = new Experience();
  }

  clickEdit(spec: Experience): void {
    this.display = true;
    Object.assign(this.experience, spec);
    this.changeDate();
  }

  add(): void {

    this.experience.cv = this.cv;
    this.experienceService.save(this.experience).subscribe(res => {

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
    this.experienceService.update(this.experience).subscribe(res => {

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


        this.experienceService.delete(id).subscribe(res => {

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

  changeDate() {
    const currentDate = new Date(this.experience.debut);
    this.minDateFin = this.datePipe.transform(currentDate.setDate(currentDate.getDate() + 1), 'yyyy-MM-dd');
  }
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
