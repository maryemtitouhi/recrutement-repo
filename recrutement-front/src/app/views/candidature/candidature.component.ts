import {Component, OnInit} from '@angular/core';
import {CandidatureService} from '../../shared/services/candidature.service';
import {ActivatedRoute} from '@angular/router';
import {Candidature} from '../../shared/model/candidature';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-candidature', templateUrl: './candidature.component.html', styleUrls: ['./candidature.component.scss']
})
export class CandidatureComponent implements OnInit {
  candidatures: Candidature[];

  constructor(private candidatureService: CandidatureService,
              private permissionService: NgxPermissionsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    const token = localStorage.getItem('token');
    const jwtHeper = new JwtHelperService();
    if (token || !jwtHeper.isTokenExpired(token)) {
      const decodedToken = jwtHeper.decodeToken(token);
      const roles = decodedToken.roles;
      if (roles.includes('ROLE_CANDIDAT')) {
        this.getByCandidat();
      } else if (roles.includes('ROLE_SOCIETE')) {
        this.getByOffre();
      }
    }
  }

  getByCandidat(): void {
    const candidat = JSON.parse(localStorage.getItem('currentUser'));
    this.candidatureService.getByCandidat(candidat.id).subscribe(data => {
      this.candidatures = data;
    }, ex => console.log(ex));
  }

  getByOffre(): void {
    const offreId = this.activatedRoute.snapshot.paramMap.get('id');
    this.candidatureService.getByOffre(offreId).subscribe(data => {
      this.candidatures = data;
    }, ex => console.log(ex));
  }

  compareDate(dateEntretien: Date) {
    if (new Date(dateEntretien) > new Date()) {
      return true;
    }
    return false;
  }
}
