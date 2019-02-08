import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CvService} from '../../cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  addPersonne(formulaire: NgForm) {
    console.log(formulaire.value);
    this.cvService.addPersonne(formulaire.value).subscribe(
      (success) => {
        this.router.navigate(['']);
      },
      (erreur) => {
        console.log(erreur);
        alert('Problème access Api');
      }
    );

  }

}
