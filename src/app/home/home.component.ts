import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularBooks: any[] = [];

  constructor(
    private bookService: BookService,
    private router: Router // ✅ أضفنا الـ Router هنا
  ) {}

  ngOnInit(): void {
    this.bookService.getPopularBooks().subscribe({
      next: (data) => {
        this.popularBooks = data;
        console.log(data); // للتأكد
      },
      // error: (err) => console.error(err),
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/book', id]);
  }
}
