import { Component, OnInit, OnDestroy, Input} from '@angular/core';

import { Subscription } from 'rxjs';
import { StudentService } from '../../services/students.service';
import { Student } from '../..//models/student.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService,private route: ActivatedRoute,private router: Router) { }


  students: any;
  currentStudent = null;
  currentIndex = -1;
  title = '';
  isArray = false;
  id =null;
 
 
  getRequestParams(searchTitle, page, pageSize): any {
   // tslint:disable-next-line:prefer-const
   let params = {};
 
   if (searchTitle) {
     params[`title`] = searchTitle;
   }
 
   if (page) {
     params[`page`] = page - 1;
   }
 
   if (pageSize) {
     params[`size`] = pageSize;
   }
 
   return params;
 }
 
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.retrieveTutorials(this.route.snapshot.paramMap.get('id'));
  }
 
 
  retrieveTutorials(id) {
    this.studentService.findById(id)
      .subscribe(
        (data: any) => {
          this.students = data.students;
          console.log(data.students);
     
        },
        error => {
          console.log(error);
        });
  }
 
  refreshList() {
    this.retrieveTutorials(this.id);
    this.currentStudent = null;
    this.currentIndex = -1;
  }
 
  setActiveTutorial(student, index) {
    this.currentStudent = student;
    this.currentIndex = index;
  }
 
  removeAllTutorials() {
    this.studentService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTutorials(this.id);
        },
        error => {
          console.log(error);
        });
  }
 
  searchTitle() {
    this.studentService.findByTitle(this.title)
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
