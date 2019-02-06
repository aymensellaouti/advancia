import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne [];
  @Output() trasferPersonne = new EventEmitter();
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
      )
    ];
  }

  ngOnInit() {
  }
  getPersonne(personne: Personne) {
    console.log('liste a récupéré la personne :', personne);
    this.trasferPersonne.emit(
      personne
    );
  }
}
