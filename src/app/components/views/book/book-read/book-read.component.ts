import { Book } from './../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {

  id_cat: string = '';

  book: Book = {
    id: '',
    title: '',
    authorName: '',
    text: ''
  }

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat =this.route.snapshot.paramMap.get('id_cat')!;
    this.book.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void{
    this.service.findById(this.book.id!).subscribe(response => {
      this.book = response;
    });
  }

  cancel(): void {
    this.router.navigate([`category/${this.id_cat}/books`]);
  }

}
