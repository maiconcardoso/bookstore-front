import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private messageSnack: MatSnackBar) { }

  findAll():Observable<Category[]> {
    const url = `${this.baseUrl}/category`;
    return this.http.get<Category[]>(url);
  }

  findById(id: string): Observable<Category> {
    const url = `${this.baseUrl}/category/${id}`;
    return this.http.get<Category>(url);
  }

  create(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/category`;
    return this.http.post<Category>(url, category);
  }

  delete(id: string):Observable<void> {
    const url = `${this.baseUrl}/category/${id}`;
    return this.http.delete<void>(url);
  }

  update(category: Category):Observable<void> {
    const url = `${this.baseUrl}/category/${category.id}`;
    return this.http.put<void>(url, category);
  }

  message(str: String) {
    this.messageSnack.open(`${str}`, 'X', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
