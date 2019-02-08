import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  link = 'http://localhost:3000/api/Users/login';
  constructor(private http: HttpClient) { }
  login(credentials) {
    console.log(credentials);
    return this.http.post<any>(this.link, credentials);
  }
}
