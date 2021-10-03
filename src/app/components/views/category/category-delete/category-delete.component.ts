import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  category: Category = {
    id: '',
    name: '',
    description: ''
  }

  constructor(private service: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.category.id!).subscribe(response => {
      this.category.name = response.name;
      this.category.description = response.description; 
      console.log(this.category);
    });
  }

  delete(): void {
    this.service.delete(this.category.id!).subscribe(response => {
      this.router.navigate(['category']);
      this.service.message('Categoria deletada com sucesso!');
    }, err => {
      this.service.message(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['category']);
  }

}
