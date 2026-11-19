import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { UserLogin } from '../models/userLogin';
import { LoginResponse } from '../models/login-response';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Router } from '@angular/router';

@Service()
export class AuthService {
private http = inject(HttpClient);
private router = inject(Router);


 baseUrl = "https://localhost:7000/api/users/"


login(model:UserLogin){
return this.http.post<LoginResponse>(this.baseUrl+'login',model);
}

decodeToken(token){
  const decoded: JwtPayload = jwtDecode(token);
  return decoded;
}

isLoggedIn(){
  const token = localStorage.getItem("token");
  if(token){
    return true;
  }
  return false;
}

logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  return this.router.navigate(["/login"]);
}


}
