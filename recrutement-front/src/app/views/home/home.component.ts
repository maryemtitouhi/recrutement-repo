import {Component, OnInit} from '@angular/core';
import {StatService} from '../../shared/services/stat.service';
import {OffreService} from '../../shared/services/offre.service';
import {Offre} from '../../shared/model/offre';
import {Pays} from '../../shared/model/pays';
import {PaysService} from '../../shared/services/pays.service';
class SearchRequest {
  keyword: string;
  pays: Pays;
  disponibilite: string;
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
  searchRequest = new SearchRequest();

  constructor(private statService: StatService,
              private paysService: PaysService,
              private offreService: OffreService) {
  }

  ngOnInit(): void {
    this.getCount();
    this.getAvailableOffres();
    this.getAllPays();
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
}
