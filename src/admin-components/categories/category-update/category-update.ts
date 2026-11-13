import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { Router, RouterLink } from '@angular/router';
import { Category } from '../../../models/category';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-category-update',
  styleUrl: './category-update.css',
  templateUrl: './category-update.html',
})
export class CategoryUpdate implements OnInit {
@Input() id;
private categoryService = inject(CategoryService);
private router = inject(Router);
private cdr = inject(ChangeDetectorRef);

category= {}as Category;


ngOnInit(): void {
  this.categoryService.getById(this.id).subscribe({
    next: (value)=> {
      this.category = value;
      this.cdr.detectChanges();
    },
    error : (err)=>{
      console.log(err);
    }
  })
}

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
