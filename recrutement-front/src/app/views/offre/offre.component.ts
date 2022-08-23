import {Component, OnInit} from '@angular/core';
import {Offre} from '../../shared/model/offre';
import {OffreService} from '../../shared/services/offre.service';
import {Societe} from '../../shared/model/societe';
import {ConfirmationService, MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
  offres: Offre [];
  societe: Societe;

  constructor(private offreService: OffreService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }


  ngOnInit(): void {
    this.societe = JSON.parse(localStorage.getItem('currentUser'));
    this.getOffreBySociete();
  }

  getOffreBySociete(): void {
    this.offreService.getBySociete(this.societe.id).subscribe(res => {
      this.offres = res;
    }, ex => console.log(ex));
  }


  changeEtat(id): void {
    this.offreService.changeEtat(id).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.getOffreBySociete();
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
        this.offreService.delete(id).subscribe(res => {
          if (res.success) {
            this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
            this.getOffreBySociete();
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
