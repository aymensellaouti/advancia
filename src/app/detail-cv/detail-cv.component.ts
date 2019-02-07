import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  constructor(private activatedRoute: ActivatedRoute, private cvService: CvService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.index = params['id'];
        this.personne = this.cvService.findPersonneById(this.index);
      }
    );
  }

}
