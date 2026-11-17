import { JwtPayload } from './../../../node_modules/jwt-decode/build/cjs/index.d';



import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { UserLogin } from '../../models/userLogin';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';



@Component({
  imports: [FormsModule, NgIf],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

private authService = inject(AuthService);
private router = inject(Router);

userLogin= {}as UserLogin;
errorMessage;

login(){
this.authService.login(this.userLogin).subscribe({
  next: (value)=>{
    localStorage.setItem('token',value.token);
    const decoded = this.authService.decodeToken(value.token);
    console.log("Decoded :",decoded)
localStorage.setItem("userName",decoded.userName);
    this.router.navigate(['/admin/categories'])
  },

  error: (err)=>{console.log("Login Hatası :",err)
    this.errorMessage = 'Kullanıcı Adı/Email veya Şifre Hatalı'
  }
})
}




}
