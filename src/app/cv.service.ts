import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne [];
  apiLink = 'http://localhost:3000/api/personnes';
  constructor(private http: HttpClient) {
  }
  getPersonnes() {
    return this.http.get <Personne []>(this.apiLink);
  }
  findPersonneById(id) {
    return this.http.get <Personne> (this.apiLink + `/${id}`);
  }
  addPersonneFake(personne: Personne) {
    const lastId = this.personnes.length - 1;
    personne.id = this.personnes[lastId].id + 1;
    this.personnes.push(personne);
  }

  addPersonne(personne: Personne) {
    return this.http.post(this.apiLink, personne);
  }
  deletePersonne(id) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);
    return this.http.delete(this.apiLink + `/${id}`, {headers});
  }
}

