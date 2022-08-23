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

      localStorage.setItem('token', res.token);
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      const role = this.authService.getRole();
      if(role === 'ROLE_ADMIN') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/home']);
      }
    }, ex => {
      this.messageService
        .add({severity: 'error', summary: 'Erreur d\'authentification', detail: 'Merci de vérifier votre email ou mot de passe'});
    });
  }
}
