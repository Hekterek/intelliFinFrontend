import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginData } from 'src/app/app-layout/models/login';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  form = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rememberMe: false,
  });

  constructor(private userService: UserService, private fb: FormBuilder) {}

  login() {
    const loginData = this.form.value as LoginData;
    console.log(loginData);

    this.userService.login(loginData).subscribe();
  }
}
