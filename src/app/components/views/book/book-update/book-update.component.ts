import { Book } from './../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

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
    this.book.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void{
    this.service.findById(this.book.id!).subscribe(response => {
      this.book = response;
    });
  }

  update():void {
    this.service.update(this.book).subscribe(response => {
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message("Livro atualizado com sucesso!");
    }, err => {
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message("Falha ao atualizar, tente novamente mais tarde");
    });
  }


  cancel(): void {
    this.router.navigate([`category/${this.id_cat}/books`]);
  }

  getMessage() {
    if (this.title.invalid) return 'O campo deve conter entre 3 a 100 de caracteres';
    if (this.authorName.invalid) return 'O campo deve conter entre 3 a 100 de caracteres';
    if (this.text.invalid) return 'O campo deve conter entre 3 a 2000000 de caracteres';
    return false;
  }

}
