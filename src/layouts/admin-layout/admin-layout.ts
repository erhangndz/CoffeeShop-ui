import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-admin-layout',
  styleUrl: './admin-layout.css',
  templateUrl: './admin-layout.html',
})
export class AdminLayout {

userName? = localStorage.getItem("userName");
private authService = inject(AuthService);


logout(){
  return this.authService.logout();
}


}
