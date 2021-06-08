import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/students.service';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { Tutorial } from '../..//models/tutorial.model';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  currentStudent = null;
  message = '';

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  
  }



  getTutorial(id): void {
   
    this.studentService.get(id)
      .subscribe(
        data => {
          this.currentStudent = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  


  updateTutorial(): void {
    this.studentService.update(this.currentStudent.id, this.currentStudent)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Evaluation was updated successfully!';

          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.studentService.delete(this.currentStudent.id)
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
