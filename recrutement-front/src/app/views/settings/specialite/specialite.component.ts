import {Component, OnInit} from '@angular/core';
import {SpecialiteService} from '../../../shared/services/specialite.service';
import {Specialite} from '../../../shared/model/specialite';
import {ConfirmationService, MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {
  specialities: Specialite[];
  display = false;
  specialite = new Specialite();

  constructor(private specialiteService: SpecialiteService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.specialiteService.getAll().subscribe(data => {
      this.specialities = data;
    }, ex => console.log(ex));
  }

  clickAdd(): void {
    this.display = true;
    this.specialite = new Specialite();
  }

  clickEdit(spec: Specialite): void {
    this.display = true;
    Object.assign(this.specialite, spec);
  }
  add(): void {
    this.specialiteService.save(this.specialite).subscribe(res => {

      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.display = false;
        this.getAll();
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  update(): void {
    this.specialiteService.update(this.specialite).subscribe(res => {

      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.display = false;
        this.getAll();
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


        this.specialiteService.delete(id).subscribe(res => {

          if (res.success) {
            this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
            this.getAll();
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
