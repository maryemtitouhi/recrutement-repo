import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../../shared/model/cv';
import {CentreInteret} from '../../../shared/model/centre-interet';
import {CentreInteretService} from '../../../shared/services/centre-interet.service';
import {ConfirmationService, MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-centre-interet',
  templateUrl: './centre-interet.component.html',
  styleUrls: ['./centre-interet.component.scss']
})
export class CentreInteretComponent implements OnInit {



  @Input() cv: Cv;
  centreInterets: CentreInteret[];
  display = false;
  centreInteret = new CentreInteret();
  constructor(private centreInteretService: CentreInteretService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getByCv();
  }




  getByCv(): void {
    this.centreInteretService.getByCv(this.cv.id).subscribe(data => {
      this.centreInterets = data;
    }, ex => console.log(ex));
  }

  clickAdd(): void {
    this.display = true;
    this.centreInteret = new CentreInteret();
  }

  clickEdit(spec: CentreInteret): void {
    this.display = true;
    Object.assign(this.centreInteret, spec);
  }

  add(): void {

    this.centreInteret.cv = this.cv;
    this.centreInteretService.save(this.centreInteret).subscribe(res => {

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
    this.centreInteretService.update(this.centreInteret).subscribe(res => {

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


        this.centreInteretService.delete(id).subscribe(res => {

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
