import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { UserLogin } from '../models/userLogin';
import { LoginResponse } from '../models/login-response';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Service()
export class AuthService {
private http = inject(HttpClient);


 baseUrl = "https://localhost:7000/api/users/"


login(model:UserLogin){
return this.http.post<LoginResponse>(this.baseUrl+'login',model);
}

decodeToken(token){
  const decoded: JwtPayload = jwtDecode(token);
  return decoded;
}


}
