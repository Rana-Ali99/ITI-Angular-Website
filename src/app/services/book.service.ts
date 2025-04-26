import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private selectedBook: any;

  // نخزن الرواية اللي المستخدم اختارها
  setSelectedBook(book: any) {
    this.selectedBook = book;
  }

  // نرجع الرواية المختارة
  getSelectedBook() {
    return this.selectedBook;
  }
}
