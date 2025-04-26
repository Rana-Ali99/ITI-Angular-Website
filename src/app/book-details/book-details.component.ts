import { Component , OnInit} from '@angular/core';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common'; // استيراد CommonModule
import { on } from 'events';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book: any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.book = this.bookService.getSelectedBook();

    if (!this.book) {
      // لو المستخدم دخل الصفحة من غير ما يختار رواية، نرجعه
      window.location.href = '/';
    }
  }
}
