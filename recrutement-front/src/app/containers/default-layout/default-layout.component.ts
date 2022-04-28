import {Component, OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements  OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor(private permissionsService: NgxPermissionsService) {
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const jwtHeper = new JwtHelperService();
    if (token || !jwtHeper.isTokenExpired(token)) {
      const decodedToken = jwtHeper.decodeToken(token);
      const roles = decodedToken.roles;
     this.navItems =  this.navItems.filter(nav => nav.roles.includes(roles[0]));
     this.permissionsService.loadPermissions(roles);
    }
  }

  logout() {
    localStorage.clear();
    location.reload();
  }
}
