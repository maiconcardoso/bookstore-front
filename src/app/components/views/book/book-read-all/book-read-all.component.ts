import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Book } from './../book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-read-all',
  templateUrl: './book-read-all.component.html',
  styleUrls: ['./book-read-all.component.css']
})
export class BookReadAllComponent implements OnInit {

  displayedColumns: string[] = ["id", "title", "books" , "action"];

  books: Book[] = [];

  id_cat: string = '';

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategory(this.id_cat).subscribe(response => {
      this.books = response;
      console.log(this.books);
    })
  }

  createBook(): void {
    this.router.navigate([`category/${this.id_cat}/books/create`])
  }

}
