import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private snackMessage: MatSnackBar) { }

  findAllByCategory(id_cat: string): Observable<Book[]> {
    const url = `${this.baseUrl}/books?category=${id_cat}`;
    return this.http.get<Book[]>(url);
  } 

  findById(id: string): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get<Book>(url);
  }

  create(book: Book, id_cat: string): Observable<Book> {
    const url = `${this.baseUrl}/books?category=${id_cat}`;
    return this.http.post<Book>(url, book);
  }

  update(book: Book): Observable<Book> {
    const url = `${this.baseUrl}/books/${book.id}`;
    return this.http.put<Book>(url, book);
  }

  delete(id: string): Observable<void> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.delete<void>(url);
  }

  message(str: string): void{
    this.snackMessage.open(`${str}`, 'X', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
 
}
