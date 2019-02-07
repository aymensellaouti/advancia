import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {EmbaucheService} from '../../embauche.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() personne: Personne;
  constructor(private embaucheService: EmbaucheService,
              private router: Router
              ) { }

  ngOnInit() {
  }

  embaucher(personne: Personne) {
    this.embaucheService.embaucher(personne);
  }
  detail(personne: Personne) {
    const link = ['cv/detail', personne.id];
    this.router.navigate(link);
  }
}
