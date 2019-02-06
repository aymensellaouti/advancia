import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
  <p>Online template {{name}}</p>
  `,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  constructor() { }

  ngOnInit() {
  }

}
