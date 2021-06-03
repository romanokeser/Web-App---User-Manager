import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddClassComponent} from './class/add-class/add-class.component'
import { DashboardComponent} from './dashboard/dashboard.component'
import { CreateEvaluationComponent } from './evaluation/create-evaluation/create-evaluation.component'
import { CreateNoteComponent} from './note/create-note/create-note.component'
import { EditClassComponent } from './class/edit-class/edit-class.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';
import { EditEvaluationComponent } from './evaluation/edit-evaluation/edit-evaluation.component';
import { ListEvaluationComponent } from './evaluation/list-evaluation/list-evaluation.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'class', component: AddClassComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'evaluationlist', component: ListEvaluationComponent},
  { path: 'evaluationlist/:id', component: ListEvaluationComponent},
  { path: 'evaluationcreate/:id', component: CreateEvaluationComponent},
  { path: 'evaluation/:id', component: EditEvaluationComponent},
  { path: 'editclass/:id', component: EditClassComponent},
  { path: 'upload', component: UploadCvComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
