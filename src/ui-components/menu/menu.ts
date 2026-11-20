import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterLink],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {

  private categoryService = inject(CategoryService);


  categories = toSignal(this.categoryService.getAll())



}
