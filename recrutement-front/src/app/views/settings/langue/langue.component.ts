import {Component, OnInit} from '@angular/core';
import {Langue} from '../../../shared/model/langue';
import {LangueService} from '../../../shared/services/langue.service';
import {ConfirmationService, MessageService} from 'primeng-lts/api';
import {ActivatedRoute} from '@angular/router';
import {Pays} from '../../../shared/model/pays';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.scss']
})
export class LangueComponent implements OnInit {
  langues: Langue[];
  display = false;
  langue = new Langue();


  constructor(private langueService: LangueService,
              private messageService: MessageService,
              private  activatedRoute: ActivatedRoute,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {

    this.getAll();
  }

  getAll(): void {
    this.langueService.getAll().subscribe(data => {
      this.langues = data;
    }, ex => console.log(ex));
  }

  clickAdd(): void {
    this.display = true;
    this.langue = new Langue();
  }

  clickEdit(spec: Langue): void {
    this.display = true;
    Object.assign(this.langue, spec);
  }

  add(): void {
    this.langueService.save(this.langue).subscribe(res => {

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
    this.langueService.update(this.langue).subscribe(res => {

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


        this.langueService.delete(id).subscribe(res => {

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
