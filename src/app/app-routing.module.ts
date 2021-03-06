import { BookReadComponent } from './components/views/book/book-read/book-read.component';
import { BookDeleteComponent } from './components/views/book/book-delete/book-delete.component';
import { BookUpdateComponent } from './components/views/book/book-update/book-update.component';
import { BookCreateComponent } from './components/views/book/book-create/book-create.component';
import { BookReadAllComponent } from './components/views/book/book-read-all/book-read-all.component';
import { CategoryUpdateComponent } from './components/views/category/category-update/category-update.component';
import { CategoryDeleteComponent } from './components/views/category/category-delete/category-delete.component';
import { CategoryCreateComponent } from './components/views/category/category-create/category-create.component';
import { CategoryReadComponent } from './components/views/category/category-read/category-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "category",
    component: CategoryReadComponent
  },
  {
    path: "category/create",
    component: CategoryCreateComponent
  },
  {
    path: "category/delete/:id",
    component: CategoryDeleteComponent
  },
  {
    path: "category/update/:id",
    component: CategoryUpdateComponent
  },
  {
    path: "category/:id_cat/books",
    component: BookReadAllComponent
  },
  {
    path: "category/:id_cat/books/create",
    component: BookCreateComponent
  },
  {
    path: "category/:id_cat/books/:id/update",
    component: BookUpdateComponent
  },
  {
    path: "category/:id_cat/books/:id/delete",
    component: BookDeleteComponent
  },
  {
    path: "category/:id_cat/books/:id/read",
    component: BookReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
