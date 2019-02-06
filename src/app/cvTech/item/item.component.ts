import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: Personne;
  @Output() personSent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  // Elle va déclencher un event contenant la personne
  sendPersonne() {
    this.personSent.emit(
      this.personne
    );
    console.log('item a envoyé la personne à liste');
  }
}
