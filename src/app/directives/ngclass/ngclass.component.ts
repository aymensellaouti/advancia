import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  est = true;
  ca = false;
  affiche = true;
  constructor() { }

  ngOnInit() {
  }
  switch() {
    this.ca = !this.ca;
    this.est = !this.est;
  }

}
