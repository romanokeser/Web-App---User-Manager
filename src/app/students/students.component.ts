import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient } from '@angular/common/http';

import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { StudentService } from '../services/students.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor( private httpClient: HttpClient,private studentService: StudentService,  private route: ActivatedRoute,
    private router: Router) { }

  student = {
    name: '',
    lastname: '',
    note: '',
    grade: 0
  };
  submitted = false;



  enteredTitle = '';
  enteredContent = '';
  

  refresh() : void{
    window.location.reload();
  }
  
  saveTutorial(): void {
    const data = {
      name: this.student.name,
      lastname: this.student.lastname,
      note: this.student.note,
      grade: this.student.grade
    };

    this.studentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.student = {
      name: '',
      lastname: '',
      note: '',
      grade: 0
    };
  }

  ngOnInit() {
  }
}
