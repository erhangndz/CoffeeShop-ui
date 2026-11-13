import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Category } from '../models/category';

@Service()
export class CategoryService {


  baseUrl = "https://localhost:7000/api/categories/"

private http = inject(HttpClient);


getAll(){
 return this.http.get<Category[]>(this.baseUrl)
}

create(model:Category){
  return this.http.post(this.baseUrl,model)
}

getById(id:number){
  return this.http.get<Category>(this.baseUrl + id)
}

update(model:Category){
  return this.http.put(this.baseUrl,model)
}

delete(id:number){
  return this.http.delete(this.baseUrl+id)
}

}
