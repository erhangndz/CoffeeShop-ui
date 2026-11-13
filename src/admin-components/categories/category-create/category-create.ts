import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category-service';
import { Category } from '../../../models/category';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterLink,FormsModule],
  selector: 'app-category-create',
  styleUrl: './category-create.css',
  templateUrl: './category-create.html',
})
export class CategoryCreate {

  private categoryService = inject(CategoryService);
  private router = inject(Router);

  category= {}as Category;



  create(){
    this.categoryService.create(this.category).subscribe({
        complete: ()=>{
          this.router.navigate(['/admin/categories']);
        },
        error: (err) => {
          console.log(err);
          
        }
    })
  }

}
