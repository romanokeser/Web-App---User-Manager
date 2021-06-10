import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { Course } from '../..//models/course.model';

@Component({
  selector: 'appedit-course-',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  currentTutorial = null;
  message = '';

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  
  }



  getTutorial(id): void {
   
    this.courseService.get(id)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  
  updatePublished(status): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      year: this.currentTutorial.year,
      published: status
    };

    this.courseService.update(this.currentTutorial.id, data)
      .subscribe(
        response => {
          this.currentTutorial.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    this.courseService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';

          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.courseService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/dashboard']);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

}
