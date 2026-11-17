import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-category-update',
  styleUrl: './category-update.css',
  templateUrl: './category-update.html',
})
export class CategoryUpdate {
private categoryService = inject(CategoryService);
private router = inject(Router);

category = history.state?.category;


update(){
  this.categoryService.update(this.category).subscribe({
    next: () =>{
      this.router.navigate(['/admin/categories']);
    },
    error: (err)=>{
      console.log(err);
    }
  })
}














}
