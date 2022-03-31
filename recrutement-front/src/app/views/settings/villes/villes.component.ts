import {Component, OnInit} from '@angular/core';
import {Ville} from '../../../shared/model/ville';
import {VilleService} from '../../../shared/services/ville.service';
import {ConfirmationService, MessageService} from 'primeng-lts/api';
import {ActivatedRoute} from '@angular/router';
import {Pays} from '../../../shared/model/pays';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.scss']
})
export class VillesComponent implements OnInit {
  villes: Ville[];
  display = false;
  ville = new Ville();
  idPays: any;

  constructor(private villeService: VilleService,
              private messageService: MessageService,
              private  activatedRoute: ActivatedRoute,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.idPays = this.activatedRoute.snapshot.paramMap.get('id');
    this.getByPays();
  }

  getByPays(): void {
    this.villeService.getByPays(this.idPays).subscribe(data => {
      this.villes = data;
    }, ex => console.log(ex));
  }

  clickAdd(): void {
    this.display = true;
    this.ville = new Ville();
  }

  clickEdit(spec: Ville): void {
    this.display = true;
    Object.assign(this.ville, spec);
  }

  add(): void {
    const pays = new Pays();
    pays.id = this.idPays;
    this.ville.pays = pays;
    this.villeService.save(this.ville).subscribe(res => {

      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.display = false;
        this.getByPays();
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  update(): void {
    this.villeService.update(this.ville).subscribe(res => {

      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.display = false;
        this.getByPays();
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


        this.villeService.delete(id).subscribe(res => {

          if (res.success) {
            this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
            this.getByPays();
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
