import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  visible = true;
  constructor() { }
  show(para) {
    this.visible = !this.visible;
    console.log(para.textContent);
  }
  ngOnInit() {

  }

}
