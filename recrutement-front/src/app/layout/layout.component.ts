import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private permissionsService: NgxPermissionsService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const jwtHeper = new JwtHelperService();
    if (token || !jwtHeper.isTokenExpired(token)) {
      const decodedToken = jwtHeper.decodeToken(token);
      const roles = decodedToken.roles;

      this.permissionsService.loadPermissions(roles);

    }
  }

}
