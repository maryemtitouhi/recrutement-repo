import {Component, OnInit} from '@angular/core';
import {Candidat} from '../../../shared/model/candidat';
import {Societe} from '../../../shared/model/societe';
import {Pays} from '../../../shared/model/pays';
import {Ville} from '../../../shared/model/ville';
import {RegisterService} from '../../../shared/services/register.service';
import {MessageService} from 'primeng-lts/api';
import {ActivatedRoute, Router} from '@angular/router';
import {PaysService} from '../../../shared/services/pays.service';
import {VilleService} from '../../../shared/services/ville.service';
import {CandidatService} from '../../../shared/services/candidat.service';
import {SocieteService} from '../../../shared/services/societe.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  candidat = new Candidat();
  societe = new Societe();
  typeRegister: string;
  countries: Pays[];
  villes: Ville[];
  country: Pays;

  constructor(private candidatService: CandidatService,
              private societeService: SocieteService,
              private messageService: MessageService,
              private paysService: PaysService,
              private villeService: VilleService,
              private datePipe: DatePipe,
              private permissionService: NgxPermissionsService) {
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.permissionService.hasPermission('ROLE_SOCIETE').then(res => {
      this.societe = user;
      this.country = this.societe.ville.pays;
    });
    this.permissionService.hasPermission('ROLE_CANDIDAT').then(res => {
      this.candidat = user;
      this.candidat.dateNaissance = this.datePipe.transform(this.candidat.dateNaissance, 'yyyy-MM-dd');

    });
    this.getAllPays();
    this.country = user.ville.pays;
    this.getVillesByPays(this.country.id);
  }


  getAllPays(): void {
    this.paysService.getAll().subscribe(data => {
      this.countries = data;
    }, ex => console.log(ex));
  }

  getVillesByPays(id): void {
    this.villeService.getByPays(id).subscribe(data => {
      this.villes = data;
    }, ex => console.log(ex));
  }

  public updateCandidat(): void {
    this.candidatService.update(this.candidat).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        localStorage.setItem('currentUser', JSON.stringify(this.candidat));
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  public updateSociete(): void {
    this.societeService.update(this.societe).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        localStorage.setItem('currentUser', JSON.stringify(this.societe));
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }


  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
