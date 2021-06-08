import { Component, OnInit, OnDestroy, Input} from '@angular/core';

import { Subscription } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {


   constructor(private courseService: CourseService,  private route: ActivatedRoute, private router: Router) { }
 
 
   courses: any;
   currentTutorial = null;
   currentIndex = -1;
   title = '';
   page = 1;
   count = 0;
   pageSize = 3;
   pageSizes = [3, 6, 9];
 
   ngOnInit() {
     this.retrieveTutorials();
 
 
     }
     //this.posts = this.postService.getPosts();
     refresh(): void {
       window.location.reload();
   }
   
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
   
     retrieveTutorials(): void {
       const params = this.getRequestParams(this.title, this.page, this.pageSize);
   
       this.courseService.getAll(params)
         .subscribe(
           response => {
             const { courses, totalItems } = response;
             this.courses = courses;
             this.count = totalItems;
             console.log(response);
           },
           error => {
             console.log(error);
           });
     }
   
     handlePageChange(event): void {
       this.page = event;
       this.retrieveTutorials();
     }
   
     handlePageSizeChange(event): void {
       this.pageSize = event.target.value;
       this.page = 1;
       this.retrieveTutorials();
     }
 
     refreshList(): void {
       this.retrieveTutorials();
       this.currentTutorial = null;
       this.currentIndex = -1;
     }
   
     setActiveTutorial(course, index): void {
       console.log("Clicked on " + course + " index "+ index);
       this.currentTutorial = course;
       this.currentIndex = index;
  
     }
   
     removeAllTutorials(): void {
       this.courseService.deleteAll()
         .subscribe(
           response => {
             console.log(response);
             this.retrieveTutorials();
           },
           error => {
             console.log(error);
           });
     }
   
     searchTitle(): void {
       this.courseService.findByTitle(this.title)
         .subscribe(
           data => {
             this.courses = data;
             console.log(data);
           },
           error => {
             console.log(error);
           });
     }
 
     ngOnDestroy() {
     
       }

}
