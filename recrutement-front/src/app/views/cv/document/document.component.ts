import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../../shared/model/cv';
import {MessageService} from 'primeng-lts/api';
import {DocumentService} from '../../../shared/services/document.service';
import * as FileSaver from 'file-saver';
import {Document} from '../../../shared/model/document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  @Input() cv: Cv;

  display = false;

  cvName = 'Choisir un CV';
  cvDoc: Document;
  lettreName = 'Choisir une lettre de motivation';
  lettreDoc: Document;

  constructor(private documentService: DocumentService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getByCv();
  }

  selectCv(event: any) {
    const file = event.target.files[0];
    this.cvName = file.name;
    this.documentService.uploadCv(file, this.cv.id).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.getByCv();
        this.cvName = 'Choisir  un CV';
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }


  selectLettre(event: any) {
    const file = event.target.files[0];
    this.lettreName = file.name;
    this.documentService.uploadLettre(file, this.cv.id).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        this.getByCv();
        this.lettreName = 'Choisir une lettre de motivation';
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  getByCv(): void {
    this.documentService.getByCv(this.cv.id).subscribe(data => {
      data.forEach(el => {
        if (el.typeDocument === 'CV') {
          this.cvDoc = el;
        }
        if (el.typeDocument === 'LETTRE_MOTIVATION') {
          this.lettreDoc = el;
        }
      });
    }, ex => console.log(ex));
  }


  downloadCV() {
    const arrayBuffer = base64ToArrayBuffer(this.cvDoc.fichier);
    const file = new Blob([arrayBuffer], {type: this.cvDoc.contentType});
    FileSaver.saveAs(file, this.cvDoc.libelle);
  }

  downloadLettre() {
    const arrayBuffer = base64ToArrayBuffer(this.lettreDoc.fichier);
    const file = new Blob([arrayBuffer], {type: this.lettreDoc.contentType});
    FileSaver.saveAs(file, this.lettreDoc.libelle);
  }

}

export function base64ToArrayBuffer(base64: string) {
  const binaryString = window.atob(base64); // Comment this if not using base64
  const bytes = new Uint8Array(binaryString.length);
  return bytes.map((byte, i) => binaryString.charCodeAt(i));
}
