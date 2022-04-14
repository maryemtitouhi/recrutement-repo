import {Component} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {MessageService} from 'primeng-lts/api';
import {Router} from '@angular/router';
import {User} from '../../../shared/model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user = new User();

  constructor(private authService: AuthService,
              private messageService: MessageService,
              private router: Router) {
  }


  authenticate(): void {
    this.authService.authenticate(this.user).subscribe(res => {
      this.router.navigate(['/']);
      localStorage.setItem('token', res.token);
    }, ex => {
      this.messageService
        .add({severity: 'error', summary: 'Erreur d\'authentification', detail: 'Merci de vérifier votre email ou mot de passe'});
    });
  }
}
