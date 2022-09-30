import {Component, OnInit} from '@angular/core';
import {StatService} from '../../shared/services/stat.service';
import {OffreService} from '../../shared/services/offre.service';
import {Offre} from '../../shared/model/offre';
import {Pays} from '../../shared/model/pays';
import {PaysService} from '../../shared/services/pays.service';
import {TypePoste} from '../../shared/model/type-poste';
import {TypePosteService} from '../../shared/services/type-poste.service';
import {Specialite} from '../../shared/model/specialite';
import {SpecialiteService} from '../../shared/services/specialite.service';
class SearchRequest {
  keyword: string;
  pays: Pays;
  disponibilite: string;
  typePostes: TypePoste[];
  specialites: Specialite[];
  niveauEtude: string;
  niveauExperience: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counts: any;
  offres: Offre[] = [];
  pays: Pays[] = [];
  typePostes: TypePoste[] = [];
  specialites: Specialite[] = [];
  searchRequest = new SearchRequest();
  advancedSearch = false;

  constructor(private statService: StatService,
              private paysService: PaysService,
              private typePosteService: TypePosteService,
              private specialiteService: SpecialiteService,
              private offreService: OffreService) {
  }

  ngOnInit(): void {
    this.searchRequest.pays = null;
    this.searchRequest.disponibilite = '';
    this.searchRequest.niveauEtude = '';
    this.searchRequest.niveauExperience = '';
    this.getCount();
    this.getAvailableOffres();
    this.getAllPays();
    this.getAllTypePostes();
    this.getAllSpecialites();
  }
  getAllSpecialites(): void {
    this.specialiteService.getAll().subscribe(data => {
      this.specialites = data;

    }, ex => {
      console.log(ex);
    });
  }
  getAllTypePostes(): void {
    this.typePosteService.getAll().subscribe(data => {
      this.typePostes = data;
    }, ex => {
      console.log(ex);
    });
  }


  getCount(): void {
    this.statService.count().subscribe(data => {
      this.counts = data;
    }, ex => console.log(ex));
  }

  getAvailableOffres(): void {
    this.offreService.getAll(this.searchRequest).subscribe(data => {
      this.offres = data;
    }, ex => console.log(ex));
  }

  getAllPays(): void {
    this.paysService.getAll().subscribe(data => {
      this.pays = data;
      console.log(this.pays);
    }, ex => console.log(ex));
  }

  chercher() {
    this.getAvailableOffres();
  }

  clickAdvancedSearch(): void {
    this.advancedSearch = !this.advancedSearch;
    if (!this.advancedSearch) {
      console.log(this.advancedSearch);
      this.searchRequest.specialites = [];
      this.searchRequest.typePostes = [];
      this.searchRequest.niveauEtude = '';
      this.searchRequest.niveauExperience = '';
    }
  }

}
