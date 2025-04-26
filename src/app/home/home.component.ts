import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // استيراد CommonModule
import { MatCardModule } from '@angular/material/card'; // استيراد MatCardModule
import { MatButtonModule } from '@angular/material/button'; // استيراد MatButtonModule
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { identity } from 'rxjs';



@Component({
  selector: 'app-home',
  standalone: true,  // تحديد إنه Standalone Component
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule , MatToolbarModule , MatIconModule], // استيراد المكونات المطلوبة
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  popularBooks = [
    {
      id:1,
      title: 'حكاية عشق',
      author: 'أحمد سمير',
      image: 'https://marketplace.canva.com/EAFXUNyaPn8/4/0/1003w/canva-%D8%BA%D9%84%D8%A7%D9%81-%D9%83%D8%AA%D8%A7%D8%A8-%D8%A8%D8%B3%D9%8A%D8%B7-%D8%A3%D8%B2%D8%B1%D9%82-%D9%88-%D8%A3%D8%A8%D9%8A%D8%B6-%D8%B9%D9%86-%D8%A7%D9%84%D9%84%D9%8A%D9%84-%D9%88-%D8%A7%D9%84%D8%A3%D9%81%D9%83%D8%A7%D8%B1-0mowxXb1r_4.jpg',
      rating: 4.5
    },
    {
      id:2,
      title: 'أسرار الظلام',
      author: 'فاطمة حسن',
      image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582295969i/51521004.jpg',
      rating: 5
    },
    {
      id:3,
      title: 'قلب من ورق',
      author: 'سارة علي',
      image: 'https://i.pinimg.com/236x/f7/e7/b0/f7e7b000afb0b4b62daf88f181ef9225.jpg',
      rating: 3.5
    },
    {
      id:4,
      title: 'قلب من ورق',
      author: 'سارة علي',
      image: 'https://marketplace.canva.com/EAFXUNyaPn8/4/0/1003w/canva-%D8%BA%D9%84%D8%A7%D9%81-%D9%83%D8%AA%D8%A7%D8%A8-%D8%A8%D8%B3%D9%8A%D8%B7-%D8%A3%D8%B2%D8%B1%D9%82-%D9%88-%D8%A3%D8%A8%D9%8A%D8%B6-%D8%B9%D9%86-%D8%A7%D9%84%D9%84%D9%8A%D9%84-%D9%88-%D8%A7%D9%84%D8%A3%D9%81%D9%83%D8%A7%D8%B1-0mowxXb1r_4.jpg',
      rating: 3.5
    },
    {
      id:5,
      title: 'قلب من ورق',
      author: 'سارة علي',
      image: 'https://marketplace.canva.com/EAFXUNyaPn8/4/0/1003w/canva-%D8%BA%D9%84%D8%A7%D9%81-%D9%83%D8%AA%D8%A7%D8%A8-%D8%A8%D8%B3%D9%8A%D8%B7-%D8%A3%D8%B2%D8%B1%D9%82-%D9%88-%D8%A3%D8%A8%D9%8A%D8%B6-%D8%B9%D9%86-%D8%A7%D9%84%D9%84%D9%8A%D9%84-%D9%88-%D8%A7%D9%84%D8%A3%D9%81%D9%83%D8%A7%D8%B1-0mowxXb1r_4.jpg',
      rating: 3.5
    },
    {
      id:6,
      title: 'قلب من ورق',
      author: 'سارة علي',
      image: 'https://marketplace.canva.com/EAFXUNyaPn8/4/0/1003w/canva-%D8%BA%D9%84%D8%A7%D9%81-%D9%83%D8%AA%D8%A7%D8%A8-%D8%A8%D8%B3%D9%8A%D8%B7-%D8%A3%D8%B2%D8%B1%D9%82-%D9%88-%D8%A3%D8%A8%D9%8A%D8%B6-%D8%B9%D9%86-%D8%A7%D9%84%D9%84%D9%8A%D9%84-%D9%88-%D8%A7%D9%84%D8%A3%D9%81%D9%83%D8%A7%D8%B1-0mowxXb1r_4.jpg',
      rating: 3.5
    },
    {
      id:7,
      title: 'قلب من ورق',
      author: 'سارة علي',
      image: 'https://marketplace.canva.com/EAFXUNyaPn8/4/0/1003w/canva-%D8%BA%D9%84%D8%A7%D9%81-%D9%83%D8%AA%D8%A7%D8%A8-%D8%A8%D8%B3%D9%8A%D8%B7-%D8%A3%D8%B2%D8%B1%D9%82-%D9%88-%D8%A3%D8%A8%D9%8A%D8%B6-%D8%B9%D9%86-%D8%A7%D9%84%D9%84%D9%8A%D9%84-%D9%88-%D8%A7%D9%84%D8%A3%D9%81%D9%83%D8%A7%D8%B1-0mowxXb1r_4.jpg',
      rating: 3.5
    },
    {
      id:8,
      title: 'قلب من ورق',
      author: 'سارة علي',
      image: 'https://marketplace.canva.com/EAFXUNyaPn8/4/0/1003w/canva-%D8%BA%D9%84%D8%A7%D9%81-%D9%83%D8%AA%D8%A7%D8%A8-%D8%A8%D8%B3%D9%8A%D8%B7-%D8%A3%D8%B2%D8%B1%D9%82-%D9%88-%D8%A3%D8%A8%D9%8A%D8%B6-%D8%B9%D9%86-%D8%A7%D9%84%D9%84%D9%8A%D9%84-%D9%88-%D8%A7%D9%84%D8%A3%D9%81%D9%83%D8%A7%D8%B1-0mowxXb1r_4.jpg',
      rating: 3.5
    },
    {
      id:9,
      title: 'قلب من ورق',
      author: 'سارة علي',
      image: 'https://marketplace.canva.com/EAFXUNyaPn8/4/0/1003w/canva-%D8%BA%D9%84%D8%A7%D9%81-%D9%83%D8%AA%D8%A7%D8%A8-%D8%A8%D8%B3%D9%8A%D8%B7-%D8%A3%D8%B2%D8%B1%D9%82-%D9%88-%D8%A3%D8%A8%D9%8A%D8%B6-%D8%B9%D9%86-%D8%A7%D9%84%D9%84%D9%8A%D9%84-%D9%88-%D8%A7%D9%84%D8%A3%D9%81%D9%83%D8%A7%D8%B1-0mowxXb1r_4.jpg',
      rating: 3.5
    },
    {
      id:10,
      title: 'قلب من ورق',
      author: 'سارة علي',
      image: 'https://marketplace.canva.com/EAFXUNyaPn8/4/0/1003w/canva-%D8%BA%D9%84%D8%A7%D9%81-%D9%83%D8%AA%D8%A7%D8%A8-%D8%A8%D8%B3%D9%8A%D8%B7-%D8%A3%D8%B2%D8%B1%D9%82-%D9%88-%D8%A3%D8%A8%D9%8A%D8%B6-%D8%B9%D9%86-%D8%A7%D9%84%D9%84%D9%8A%D9%84-%D9%88-%D8%A7%D9%84%D8%A3%D9%81%D9%83%D8%A7%D8%B1-0mowxXb1r_4.jpg',
      rating: 3.5
    }
  ];
constructor(private bookService: BookService, private router: Router) {}

goToDetails(book: any) {
  this.bookService.setSelectedBook(book);  // خزنا الرواية
  this.router.navigate(['/details', book.id]);  // نروح لصفحة التفاصيل
}

}





