import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://localhost:44303/api/Stories/popular'; // ده رابط الـ API بتاعك

  constructor(private http: HttpClient) {}

  getPopularBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
