import {Component, Input, OnInit} from '@angular/core';
import {Diplome} from '../../../shared/model/diplome';
import {DiplomeService} from '../../../shared/services/diplome.service';
import {ConfirmationService, MessageService} from 'primeng-lts/api';
import {ActivatedRoute} from '@angular/router';
import {Cv} from '../../../shared/model/cv';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrls: ['./diplome.component.scss']
})
export class DiplomeComponent implements OnInit {
  @Input() cv: Cv;
  diplomes: Diplome[];
  display = false;
  diplome = new Diplome();
  minDateFin: any;

  constructor(private diplomeService: DiplomeService,
              private messageService: MessageService,
              private activatedRoute: ActivatedRoute,
              private datePipe: DatePipe,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    console.log(this.cv);
    if (this.cv) {
      this.getByCv();
    }

  }

  getByCv(): void {
    this.diplomeService.getByCv(this.cv.id).subscribe(data => {
      this.diplomes = data;
    }, ex => console.log(ex));
  }

  clickAdd(): void {
    this.display = true;
    this.diplome = new Diplome();
  }

  clickEdit(spec: Diplome): void {
    this.display = true;
    Object.assign(this.diplome, spec);
    this.changeDate();
  }

  add(): void {

    this.diplome.cv = this.cv;
    this.diplomeService.save(this.diplome).subscribe(res => {

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
    this.diplomeService.update(this.diplome).subscribe(res => {

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


        this.diplomeService.delete(id).subscribe(res => {

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
    const currentDate = new Date(this.diplome.debut);
    this.minDateFin = this.datePipe.transform(currentDate.setDate(currentDate.getDate() + 1), 'yyyy-MM-dd');
  }
}
