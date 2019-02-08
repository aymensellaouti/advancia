import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-oberv',
  templateUrl: './oberv.component.html',
  styleUrls: ['./oberv.component.css']
})
export class ObervComponent implements OnInit {
  observable;
  constructor() {
  }
  ngOnInit() {
     this.observable = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable.subscribe(
      (value) => {
        console.log(value);
      },
      (erreur) => {
        console.log(erreur);
      },
      () => {
        console.log('complete');
      }
    );
  }


}
