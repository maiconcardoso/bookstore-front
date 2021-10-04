import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  title = new FormControl('', [Validators.minLength(3)]);
  authorName = new FormControl('', [Validators.minLength(3)]);
  text = new FormControl('', [Validators.minLength(3)]);

  constructor() { }

  ngOnInit(): void {
  }

  getMessage() {
    if (this.title.invalid) return 'O campo deve conter entre 3 a 100 de caracteres';
    if (this.authorName.invalid) return 'O campo deve conter entre 3 a 100 de caracteres';
    if (this.text.invalid) return 'O campo deve conter entre 3 a 2000000 de caracteres';
    return false;
  }

}
