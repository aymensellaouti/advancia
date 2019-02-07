import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  estEmbauchee: boolean;
  embauchees: Personne [];
  constructor() {
    this.embauchees = [];
    this.estEmbauchee = false;
  }
  getEmbauchees() {
    return this.embauchees;
  }
  embaucher(personne: Personne) {
    this.estEmbauchee = false;
    if ( this.embauchees.indexOf(personne) < 0) {
      this.embauchees.push(personne);
    } else {
      this.estEmbauchee = true;
    }
  }
}
