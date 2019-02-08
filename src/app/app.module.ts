import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CouleurComponent } from './couleur/couleur.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListComponent } from './cvTech/list/list.component';
import { ItemComponent } from './cvTech/item/item.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import {APP_ROUTING} from './app.routing';
import { HeaderComponent } from './header/header.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { AddPersonneComponent } from './cvTech/add-personne/add-personne.component';
import { LoginComponent } from './login/login.component';
import { ObervComponent } from './oberv/oberv.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthentificationGuard} from './Guards/authentificationGuard';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CouleurComponent,
    CardComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    NgStyleComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    DetailCvComponent,
    AddPersonneComponent,
    LoginComponent,
    ObervComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [AuthentificationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
