import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {CvComponent} from './cvTech/cv/cv.component';
import {CouleurComponent} from './couleur/couleur.component';
import {DetailCvComponent} from './detail-cv/detail-cv.component';


const ROUTING: Routes = [
  {path: '', component: CvComponent},
  {path: 'color/:couleur/:param', component: CouleurComponent},
  {path: 'todos', component: TodoComponent},
  {path: 'cv/detail/:id', component: DetailCvComponent},
];

export const APP_ROUTING = RouterModule.forRoot(ROUTING);
