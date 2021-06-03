import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { Tutorial } from '../..//models/tutorial.model';
@Component({
  selector: 'app-edit-evaluation',
  templateUrl: './edit-evaluation.component.html',
  styleUrls: ['./edit-evaluation.component.css']
})
export class EditEvaluationComponent implements OnInit {

  currentEvaluation = null;
  message = '';

  constructor(
    private evaluationService: EvaluationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  
  }



  getTutorial(id): void {
   
    this.evaluationService.get(id)
      .subscribe(
        data => {
          this.currentEvaluation = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  


  updateTutorial(): void {
    this.evaluationService.update(this.currentEvaluation.id, this.currentEvaluation)
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
    this.evaluationService.delete(this.currentEvaluation.id)
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
