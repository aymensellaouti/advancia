import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../Model/Personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  index;
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.index = params['id'];
        this.cvService.findPersonneById(this.index).subscribe(
          (personne) => {
            this.personne = personne;
          },
          (error) => {
            this.personne = null;
            console.log(error);
          }
        );
      }
    );
  }
  deletePerson(id) {
    this.cvService.deletePersonne(id).subscribe(
      (succes) => {
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
