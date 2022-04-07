import {Component, OnInit} from '@angular/core';
import {Candidat} from '../../../shared/model/candidat';
import {CandidatService} from '../../../shared/services/candidat.service';
import {MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidatComponent implements OnInit {
  candidats: Candidat[];

  constructor(private candidatService: CandidatService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.candidatService.getAll().subscribe(data => {
      this.candidats = data;
    }, ex => console.log(ex));
  }

  changeEtat(candidat: Candidat) {
    this.candidatService.update(candidat).subscribe(res => {

      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }
}
