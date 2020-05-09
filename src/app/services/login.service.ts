import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../models/login';
import { Tipo } from '../models/tipo';
import { Produto } from '../models/produto';
import { Carro } from '../models/carro';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Validators } from '@angular/forms';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  // API path
  base_path = 'http://127.0.0.1:3000';
  valor = 0;
 
  constructor(private http: HttpClient) { }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  postLogin(item): Observable<Login> {
    return this.http
      .post<Login>(this.base_path + '/api/logar', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  } 

  gettipo(): Observable<Tipo> {
    return this.http
      .get<Tipo>(this.base_path + '/api/tipo')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getproduto(): Observable<Produto> {
    return this.http
      .get<Produto>(this.base_path + '/api/produto')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getcarro(): Observable<Carro> {
    return this.http
      .get<Carro>(this.base_path + '/api/carro')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  posttipo(item): Observable<Tipo> {
    return this.http
      .post<Tipo>(this.base_path + '/api/criartipo', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  postproduto(item): Observable<Tipo> {
    return this.http
      .post<Tipo>(this.base_path + '/api/criarproduto', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  postcarro(item): Observable<Carro> {
    return this.http
      .post<Carro>(this.base_path + '/api/criarcarro', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deletetipo(id) {
    return this.http
      .delete<Tipo>(this.base_path + '/api/excluirtipo/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteproduto(id) {
    return this.http
      .delete<Produto>(this.base_path + '/api/excluirproduto/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deletecarro(id) {
    return this.http
      .delete<Carro>(this.base_path + '/api/excluircarro/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pegartipo(id) {
    return this.http
      .post<Tipo>(this.base_path + '/api/pegartipo/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pegarcarro(id) {
    return this.http
      .post<Tipo>(this.base_path + '/api/pegarcarro/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  pegaproduto(id) {
    return this.http
      .post<Produto>(this.base_path + '/api/pegaproduto/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updatetipo(id, item): Observable<Tipo> {
    return this.http
      .put<Tipo>(this.base_path + '/api/editartipo/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updatecarro(id, item): Observable<Carro> {
    return this.http
      .put<Carro>(this.base_path + '/api/editarcarro/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


 

 
}