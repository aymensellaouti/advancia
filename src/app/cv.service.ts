import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';
import {HttpClient} from '@angular/common/http';

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
  findPersonneById(id): Personne {
    const personne = this.personnes.find(pers => {
      return pers.id == id;
    });
    return personne;
  }
  addPersonne(personne: Personne) {
    const lastId = this.personnes.length - 1;
    personne.id = this.personnes[lastId].id + 1;
    this.personnes.push(personne);
  }
}

