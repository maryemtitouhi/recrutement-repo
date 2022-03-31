import { Component, OnInit } from '@angular/core';
import {TypePoste} from '../../../shared/model/type-poste';
import {TypePosteService} from '../../../shared/services/type-poste.service';
import {ConfirmationService, MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-type-poste',
  templateUrl: './type-poste.component.html',
  styleUrls: ['./type-poste.component.scss']
})
export class TypePosteComponent implements OnInit {
  typePostes: TypePoste[];
  display = false;
  typePoste = new TypePoste();

  constructor(private typePosteService: TypePosteService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.typePosteService.getAll().subscribe(data => {
      this.typePostes = data;
    }, ex => console.log(ex));
  }

  clickAdd(): void {
    this.display = true;
    this.typePoste = new TypePoste();
  }

  clickEdit(spec: TypePoste): void {
    this.display = true;
    Object.assign(this.typePoste, spec);
  }
  add(): void {
    this.typePosteService.save(this.typePoste).subscribe(res => {

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
    this.typePosteService.update(this.typePoste).subscribe(res => {

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


        this.typePosteService.delete(id).subscribe(res => {

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
