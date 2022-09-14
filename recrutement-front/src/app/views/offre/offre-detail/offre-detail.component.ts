import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OffreService} from '../../../shared/services/offre.service';
import {Offre} from '../../../shared/model/offre';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CandidatureService} from '../../../shared/services/candidature.service';
import {MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styleUrls: ['./offre-detail.component.scss']
})
export class OffreDetailComponent implements OnInit {
  offreId: any;
  offre = new Offre();
  display = false;

  constructor(private offreService: OffreService,
              private router: Router,
              private candidatureService: CandidatureService,
              private messageService: MessageService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.offreId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getById();
  }

  getById(): void {
    this.offreService.getById(this.offreId).subscribe(res => {
      this.offre = res;
    }, ex => console.log(ex));
  }

  displayPostule(): boolean {
    const token = localStorage.getItem('token');
    const jwtHeper = new JwtHelperService();
    if (!token || jwtHeper.isTokenExpired(token)) {
      return true;
    } else {
      const decodedToken = jwtHeper.decodeToken(token);
      const roles = decodedToken.roles;
      if (roles.includes('ROLE_CANDIDAT')) {
        return true;
      }
    }
    return false;
  }

  postuler(offre: Offre) {
    const token = localStorage.getItem('token');
    const jwtHeper = new JwtHelperService();
    if (!token || jwtHeper.isTokenExpired(token)) {
      this.router.navigate(['/login']);
    } else {
      const candidat = JSON.parse(localStorage.getItem('currentUser'));
      this.candidatureService.postuler(candidat.id, offre.id).subscribe(res => {
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
}
