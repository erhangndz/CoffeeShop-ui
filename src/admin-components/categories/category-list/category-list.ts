import { CategoryService } from './../../../services/category-service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../../models/category';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterLink],
  selector: 'app-category-list',
  styleUrl: './category-list.css',
  templateUrl: './category-list.html',
})
export class CategoryList {

private categoryService = inject(CategoryService);


// categories:Category[];

// getCategories(){

//   this.categoryService.getAll().subscribe({
//     next: (value) =>this.categories =value,

//     error: (err) => console.log(err)
//   })


// }

categories = toSignal(this.categoryService.getAll())









}
