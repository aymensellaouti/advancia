import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-couleur',
  templateUrl: './couleur.component.html',
  styleUrls: ['./couleur.component.css']
})
export class CouleurComponent implements OnInit {
  @Input() couleur = 'red';
  @Output() sendDataToFils = new EventEmitter();
  constructor(private activatedRoute: ActivatedRoute) { }
    ngOnInit() {
    this.activatedRoute.params.subscribe(
      (mesParametres) => {
        this.couleur = mesParametres['couleur'];
        console.log(mesParametres['param']);
      }
    );
  }
  changeColor(maCouleur) {
    this.couleur = maCouleur;
  }
  sendData() {
   this.sendDataToFils.emit('red');
  }
}
