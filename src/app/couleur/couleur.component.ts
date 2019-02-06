import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-couleur',
  templateUrl: './couleur.component.html',
  styleUrls: ['./couleur.component.css']
})
export class CouleurComponent implements OnInit {
  @Input() couleur = 'red';
  @Output() sendDataToFils = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeColor(maCouleur) {
    this.couleur = maCouleur;
  }
  sendData() {
   this.sendDataToFils.emit('red');
  }
}
