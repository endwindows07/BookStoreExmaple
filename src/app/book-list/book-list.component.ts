import { Component, OnInit } from '@angular/core';
// ./ = path ปัจจุบัน
// ../ = path ก่อนหน้า

import { BookModel } from './../models/BookModel';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  Books: BookModel[] = [];

  constructor() {
    this.MockData();
  }

  ngOnInit() {
  }

  private MockData() {
    for(let i = 1; i <= 10; i++){
      // สร้างจำลองข้อมูล
      let book = new BookModel();
      book.ID = i;
      book.Name = "Name Book " + i;
      book.Details = "Book Detail " + i;
      book.Prices = 100 + i;

      // เพิ่มข้อมูลลง array

      //this.arrays.เพิ่ม(ข้อมูล)
      this.Books.push(book);
      // this.Books.unshift(book)

    }
  }
}
