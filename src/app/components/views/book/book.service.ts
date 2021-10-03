import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAllByCategory(id_cat: string): Observable<Book[]> {
    const url = `${this.baseUrl}/books?category=${id_cat}`;
    return this.http.get<Book[]>(url);
  } 

}
