import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddClassComponent} from './class/add-class/add-class.component'
import { ClassListComponent} from './class/class-list/class-list.component'
import { DashboardComponent} from './dashboard/dashboard.component'
import { CreateEvaluationComponent } from './evaluation/create-evaluation/create-evaluation.component'
import { AddCourseComponent} from './course/add-course/add-course.component'
import { EditCourseComponent} from './course/edit-course/edit-course.component'
import { ListCourseComponent} from './course/list-course/list-course.component'
import { EditClassComponent } from './class/edit-class/edit-class.component';

import { EditEvaluationComponent } from './evaluation/edit-evaluation/edit-evaluation.component';
import { ListEvaluationComponent } from './evaluation/list-evaluation/list-evaluation.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentsComponent } from './students/students.component';




const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'class', component: AddClassComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'evaluationlist', component: ListEvaluationComponent},
  { path: 'evaluationlist/:id', component: ListEvaluationComponent},
  { path: 'evaluationcreate/:id', component: CreateEvaluationComponent},
  { path: 'evaluation/:id', component: EditEvaluationComponent},
  { path: 'student/:id', component: StudentEditComponent},
  { path: 'studentcreate', component: StudentsComponent},
  { path: 'editclass/:id', component: EditClassComponent},
  { path: 'addclass/:id', component: AddClassComponent},
  { path: 'classlist/:id', component: ClassListComponent},
  { path: 'studentlist', component: StudentListComponent},
  { path: 'editcourse/:id', component: EditCourseComponent},
  { path: 'course', component: AddCourseComponent},
  { path: 'courselist', component: ListCourseComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
