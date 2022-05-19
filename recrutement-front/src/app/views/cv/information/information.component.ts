import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../../shared/model/cv';
import {CvService} from '../../../shared/services/cv.service';
import {MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Input() cv: Cv;
  constructor(private cvService: CvService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    console.log(this.cv);
  }

  updateCv() {
    this.cvService.save(this.cv).subscribe(res => {

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
