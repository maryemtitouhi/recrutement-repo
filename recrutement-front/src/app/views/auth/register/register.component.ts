import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../../shared/services/register.service';
import {MessageService} from 'primeng-lts/api';
import {ActivatedRoute, Router} from '@angular/router';
import {Candidat} from '../../../shared/model/candidat';
import {Societe} from '../../../shared/model/societe';
import {PaysService} from '../../../shared/services/pays.service';
import {VilleService} from '../../../shared/services/ville.service';
import {Pays} from '../../../shared/model/pays';
import {Ville} from '../../../shared/model/ville';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  candidat = new Candidat();
  societe = new Societe();
  typeRegister: string;
  countries: Pays[];
  villes: Ville[];
  country: Pays;
  confirmPassword: any;
  constructor(private registerService: RegisterService,
              private messageService: MessageService,
              private activatedRoute: ActivatedRoute,
              private paysService: PaysService,
              private villeService: VilleService,
              private router: Router) {
  }

  ngOnInit(): void {
     this.typeRegister = this.activatedRoute.snapshot.paramMap.get('type');
    this.getAllPays();
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
  public registerCandidat(): void {
    this.registerService.registerCandidat(this.candidat).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.router.navigate(['/login']);
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Op??ration non effectu??e'});
      console.log(ex);
    });
  }

  public registerSociete(): void {
    this.registerService.registerSociete(this.societe).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.router.navigate(['/login']);
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Op??ration non effectu??e'});
      console.log(ex);
    });
  }


}
