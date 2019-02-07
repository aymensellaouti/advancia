import { Component, OnInit } from '@angular/core';
import {EmbaucheService} from '../embauche.service';
import {Personne} from '../Model/Personne';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  embauches: Personne[];
  constructor(public embaucheesService: EmbaucheService) { }

  ngOnInit() {
    this.embauches = this.embaucheesService.getEmbauchees();
  }

}
