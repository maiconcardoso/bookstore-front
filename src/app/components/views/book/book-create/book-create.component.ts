import { Book } from './../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  id_cat: string = '';
  book: Book = {
    id: '',
    title: '',
    authorName: '',
    text: ''
  }

  title = new FormControl('', [Validators.minLength(3)]);
  authorName = new FormControl('', [Validators.minLength(3)]);
  text = new FormControl('', [Validators.minLength(3)]);

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat =this.route.snapshot.paramMap.get('id_cat')!;
  }

  create(): void {
    this.service.create(this.book, this.id_cat).subscribe(response => {
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message("Livro criado com sucesso!");
    })
  }

  cancel(): void {
    this.router.navigate([`category/${this.id_cat}/books`])
  }

  getMessage() {
    if (this.title.invalid) return 'O campo deve conter entre 3 a 100 de caracteres';
    if (this.authorName.invalid) return 'O campo deve conter entre 3 a 100 de caracteres';
    if (this.text.invalid) return 'O campo deve conter entre 3 a 2000000 de caracteres';
    return false;
  }

}
