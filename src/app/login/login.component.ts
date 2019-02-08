import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from '../authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(formulaire: NgForm) {
    const credentials = {
         "email": formulaire.value.mail,
         "password": formulaire.value.pwd
       };
    this.authenticationService.login(credentials).subscribe(
      (response) => {
        localStorage.setItem('token', response.id);
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
