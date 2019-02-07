import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {CvComponent} from './cvTech/cv/cv.component';


const ROUTING: Routes = [
  {path: '', component: CvComponent},
  {path: 'todos', component: TodoComponent}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTING);
