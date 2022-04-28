import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {MessageService} from 'primeng-lts/api';
import {NgForm} from '@angular/forms';

class PasswordRequest {
  id: number;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  passwordRequest = new PasswordRequest();

  constructor(private userService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }


  public changePassword(f: NgForm): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.passwordRequest.id = user.id;
    this.userService.changePassword(this.passwordRequest).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        f.resetForm();
      } else {
        this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }
}
