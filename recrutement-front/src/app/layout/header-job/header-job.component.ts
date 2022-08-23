import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-header-job',
  templateUrl: './header-job.component.html',
  styleUrls: ['./header-job.component.scss']
})
export class HeaderJobComponent implements OnInit {
  isLoggedIn =  false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    localStorage.clear();
    location.reload();
  }
}
