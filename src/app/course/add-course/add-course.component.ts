import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient } from '@angular/common/http';

import { NgForm } from "@angular/forms";

import { MaterialModule } from '../../material/material.module';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor( private httpClient: HttpClient,private courseService: CourseService) { }

  tutorial = {
    title: '',
    description: '',
    year: 2021,
    published: false
  };
  submitted = false;



  enteredTitle = '';
  enteredContent = '';
  

  refresh() : void{
    window.location.reload();
  }
  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      year: this.tutorial.year
    };

    this.courseService.create(data)
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
    this.tutorial = {
      title: '',
      description: '',
      year: 2021,
      published: false
    };
  }



  ngOnInit(): void {
  }

}
