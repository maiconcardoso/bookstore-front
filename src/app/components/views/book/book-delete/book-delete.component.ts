import { Book } from './../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
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

  delete(): void {
    this.service.delete(this.book.id!).subscribe(response => {
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message('Livro deletado com sucesso!');
    }, err => {
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message('falha ao deletar o livro, tente novamente mais tarde.');
    })
  }
}
