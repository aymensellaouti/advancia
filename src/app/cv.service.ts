import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne [];

  constructor() {
    this.personnes = [
      new Personne(
        1,
        'aymen',
        'sellaouti',
        'prof',
        36,
        'as.jpg'
      ),
      new Personne(
        2,
        'skander',
        'Sellaouti',
        'Informaticien',
        26,
        'skan.jpg'
      ),
      new Personne(
        3,
        'skander',
        'Sellaouti',
        'Informaticien',
        26,
        'skan.jpg'
      )
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
  findPersonneById(id): Personne {
    const personne = this.personnes.find(pers => {
      return pers.id == id;
    });
    return personne;
  }
}

