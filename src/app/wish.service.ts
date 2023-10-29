import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  constructor(private http: HttpClient) { }

  getWishes() {
    // using django rest api here for data
    return this.http.get("http://127.0.0.1:8000/wishes/")
  }
}
