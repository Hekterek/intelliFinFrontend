import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/app-layout/models/login';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  emailPattern: RegExp = /^[a-zd]+[w.-]*@[a-zd]+[a-zd-]*.[a-z]{2,63}$/i;
  formError: String = '';

  form = this.fb.group({
    login: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.emailPattern),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rememberMe: false,
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  login() {
    if (this.form.status == 'INVALID') {
      this.formError = 'Bad credentials';
    } else {
      const loginData = this.form.value as LoginData;

      this.authService.login(loginData).subscribe({
        next: () => {
          this.router.navigate(['/app/categories']);
        },
      });
    }
  }
}
