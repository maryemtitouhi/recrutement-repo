import {Component, OnInit} from '@angular/core';
import {Cv} from '../../shared/model/cv';
import {CvService} from '../../shared/services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  cv :Cv;

  constructor(private cvService: CvService) {
  }

  ngOnInit(): void {
    const candidat = JSON.parse(localStorage.getItem('currentUser'));
    this.cvService.getByCandidat(candidat.id).subscribe(res => {
      if (res) {
        this.cv = res;
      } else {
        this.cv = new Cv();
        this.cv.candidat = candidat;
      }
    });
  }

}
