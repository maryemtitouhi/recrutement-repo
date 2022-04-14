import { Component, OnInit } from '@angular/core';
import {Societe} from '../../../shared/model/societe';
import {SocieteService} from '../../../shared/services/societe.service';
import {MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent implements OnInit {
  societes: Societe[];
  constructor(private societeService: SocieteService,
                   private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.societeService.getAll().subscribe(data => {
      this.societes = data;
    }, ex => console.log(ex));
  }
  changeEtat(societe: Societe) {
    this.societeService.update(societe).subscribe(res => {

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


