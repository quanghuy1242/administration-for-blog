import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  hide: boolean = true;
  loginActive: boolean = false;
  
  constructor(
    private authService: AuthService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  getEmailError(): string {
    return this.email.hasError('required') ? 'You must enter a value for email' : this.email.hasError('email') ? 'Your input email is not valid' : '';
  }

  getPassError(): string {
    return this.password.hasError('required') ? 'You must enter a value for password' : '';
  }

  disableForm(): void {
    this.loginActive = true;
    this.email.disable();
    this.password.disable();
  }

  enableForm(): void {
    this.loginActive = false;
    this.email.enable();
    this.password.enable();
  }

  hasError(): boolean {
    return this.getEmailError() !== "" && this.getPassError() !== "";
  }

  async login() {
    this.disableForm();
    if (!this.hasError()) {
      try {
        await this.authService.login(this.email.value, this.password.value);
        this.router.navigate(['/dashboard']);
      } catch (error) {
        this.dialog.open(DialogAlertComponent, {
          width: '300px',
          data: { title: 'Error', content: error }
        });
        this.enableForm();
      }
    }
  }

}
