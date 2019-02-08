import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {CvService} from '../../cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne [];
  @Output() trasferPersonne = new EventEmitter();
  constructor(private cvService: CvService) {}
  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
        (personnes) => {
          this.personnes = personnes;
          return this.personnes;
        },
        (error) => {
          alert('problème veuillez contacter l\'admin');
        }
    );
  }
  getPersonne(personne: Personne) {
    console.log('liste a récupéré la personne :', personne);
    this.trasferPersonne.emit(
      personne
    );
  }
}
