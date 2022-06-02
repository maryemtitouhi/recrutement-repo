import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../../shared/model/cv';
import {NiveauLangue} from '../../../shared/model/niveau-langue';
import {NiveauLangueService} from '../../../shared/services/niveau-langue.service';
import {ConfirmationService, MessageService} from 'primeng-lts/api';
import {LangueService} from '../../../shared/services/langue.service';
import {Langue} from '../../../shared/model/langue';

@Component({
  selector: 'app-niveau-langue',
  templateUrl: './niveau-langue.component.html',
  styleUrls: ['./niveau-langue.component.scss']
})
export class NiveauLangueComponent implements OnInit {


  @Input() cv: Cv;
  niveauLangues: NiveauLangue[];
  langues: Langue[];
  display = false;
  niveauLangue = new NiveauLangue();
  constructor(private niveauLangueService: NiveauLangueService,
              private messageService: MessageService,
              private langueService: LangueService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getByCv();
    this.getAllLangue();
  }

  getAllLangue(): void {
    this.langueService.getAll().subscribe(data => {
      this.langues = data;
    }, ex => console.log(ex));
  }


  getByCv(): void {
    this.niveauLangueService.getByCv(this.cv.id).subscribe(data => {
      this.niveauLangues = data;
    }, ex => console.log(ex));
  }

  clickAdd(): void {
    this.display = true;
    this.niveauLangue = new NiveauLangue();
  }

  clickEdit(spec: NiveauLangue): void {
    this.display = true;
    Object.assign(this.niveauLangue, spec);
  }

  add(): void {

    this.niveauLangue.cv = this.cv;
    this.niveauLangueService.save(this.niveauLangue).subscribe(res => {

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
    this.niveauLangueService.update(this.niveauLangue).subscribe(res => {

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


        this.niveauLangueService.delete(id.langueId, id.cvId).subscribe(res => {

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

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
