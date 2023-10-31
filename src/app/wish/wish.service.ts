import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': "application/json"
      })
    }
  }

  getWishes() {
    let options = this.getStandardOptions()
    options.params = new HttpParams({
      fromObject: {
        format: "json"
      }
    })
    // using django rest api here for data
    return this.http.get("http://127.0.0.1:8000/wishes/", options)
      .pipe(catchError(this.handleError))
    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network: ', error.error)
    } else {
      console.error('Server-side error', error.error)
    }
    return throwError(() => new Error('Cannot get wishes from the server'))
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions()
    options.headers = options.headers.set('Authorization', 'value-need-for-authorization')
    // this.http.post(url, body, options)
  }

}
