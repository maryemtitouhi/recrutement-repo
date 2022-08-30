import {Component, OnInit} from '@angular/core';
import {Offre} from '../../../shared/model/offre';
import {OffreService} from '../../../shared/services/offre.service';
import {TypePosteService} from '../../../shared/services/type-poste.service';
import {LangueService} from '../../../shared/services/langue.service';
import {SpecialiteService} from '../../../shared/services/specialite.service';
import {MessageService} from 'primeng-lts/api';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Specialite} from '../../../shared/model/specialite';
import {Langue} from '../../../shared/model/langue';
import {TypePoste} from '../../../shared/model/type-poste';

@Component({
  selector: 'app-add-edit-offre',
  templateUrl: './add-edit-offre.component.html',
  styleUrls: ['./add-edit-offre.component.scss']
})
export class AddEditOffreComponent implements OnInit {
  offre = new Offre();
  specialites: Specialite[];
  langues: Langue[];
  typePostes: TypePoste[];
  file: File;
  offreId;

  constructor(private offreService: OffreService,
              private typePosteService: TypePosteService,
              private langueService: LangueService,
              private specialiteService: SpecialiteService,
              private messageService: MessageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.offreId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.offreId) {
      this.getById();
    }
    this.getAllLangues();
    this.getAllSpecialites();
    this.getAllTypePostes();
  }

  getById(): void {
    this.offreService.getById(this.offreId).subscribe(res => {
      this.offre = res;
    }, ex => console.log(ex));
  }

  getAllSpecialites(): void {
    this.specialiteService.getAll().subscribe(data => {
      this.specialites = data;
      if (this.offreId) {
        this.offre.specialites.forEach(spec => {
          const index = this.specialites.findIndex(s => s.id === spec.id);
          if (index !== -1) {
            this.specialites[index] = spec;
          }
        });
      }
    }, ex => {
      console.log(ex);
    });
  }

  getAllLangues(): void {
    this.langueService.getAll().subscribe(data => {
      this.langues = data;
      if (this.offreId) {
        this.offre.langues.forEach(lng => {
          const index = this.langues.findIndex(l => l.id === lng.id);
          if (index !== -1) {
            this.langues[index] = lng;
          }
        });
      }
    }, ex => {
      console.log(ex);
    });
  }

  getAllTypePostes(): void {
    this.typePosteService.getAll().subscribe(data => {
      this.typePostes = data;

      if (this.offreId) {
        this.offre.typePostes.forEach(pst => {
          const index = this.typePostes.findIndex(l => l.id === pst.id);
          if (index !== -1) {
            this.typePostes[index] = pst;
          }
        });
      }
    }, ex => {
      console.log(ex);
    });
  }

  selectFile(event: any) {
    this.file = event.target.files[0];
  }

  valider() {
    if (this.offre.id) {
      this.update();
    } else {
      this.save();
    }
  }

  save(): void {
    if (this.file) {


      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.offre.societe = currentUser;
      const off = new Blob([JSON.stringify(this.offre)],
        {type: 'application/json'});
      this.offreService.save(this.file, off).subscribe(res => {
        this.router.navigate(['/offre']);
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
      }, ex => {
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});

        console.log(ex);
      });
    } else {
      this.messageService.add({severity: 'warn', summary: 'Attention', detail: 'Merci de choisir une image pour cette offre'});
    }
  }

  update(): void {


    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.offre.societe = currentUser;
    const off = new Blob([JSON.stringify(this.offre)],
      {type: 'application/json'});
    this.offreService.update(this.file, off).subscribe(res => {
      this.router.navigate(['/offre']);
      this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});

      console.log(ex);
    });
  }
  compareFn(obj1: any, obj2: any) {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
  }
}
