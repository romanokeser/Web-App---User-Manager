import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule} from './material/material.module';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AddClassComponent } from './class/add-class/add-class.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassListComponent } from './class/class-list/class-list.component';
import { DeleteClassComponent } from './class/delete-class/delete-class.component';
import { EditClassComponent } from './class/edit-class/edit-class.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';
import { CreateEvaluationComponent } from './evaluation/create-evaluation/create-evaluation.component';
import { EditEvaluationComponent } from './evaluation/edit-evaluation/edit-evaluation.component';
import { DeleteEvaluationComponent } from './evaluation/delete-evaluation/delete-evaluation.component';
import { InsertGradeComponent } from './grade/insert-grade/insert-grade.component';
import { EditGradeComponent } from './grade/edit-grade/edit-grade.component';
import { DeleteGradeComponent } from './grade/delete-grade/delete-grade.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatGridListModule} from '@angular/material/grid-list';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { ListEvaluationComponent } from './evaluation/list-evaluation/list-evaluation.component';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { ListCourseComponent } from './course/list-course/list-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    AddClassComponent,
    DashboardComponent,
    DeleteClassComponent,
    EditClassComponent,
    UploadCvComponent,
    CreateEvaluationComponent,
    EditEvaluationComponent,
    DeleteEvaluationComponent,
    InsertGradeComponent,
    EditGradeComponent,
    DeleteGradeComponent,
    ClassListComponent,
    UploadFilesComponent,
    ListEvaluationComponent,
    StudentsComponent,
    StudentListComponent,
    StudentEditComponent,
    CourseComponent,
    AddCourseComponent,
    ListCourseComponent,
    EditCourseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
