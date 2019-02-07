import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {FirstService} from '../../first.service';
import {EmbaucheService} from '../../embauche.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selectedPersonne: Personne;
  constructor(public embaucheeService: EmbaucheService) { }

  ngOnInit() {}

  getPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
