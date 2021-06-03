import { Component, OnInit, OnDestroy, Input} from '@angular/core';

import { Subscription } from 'rxjs';
import { EvaluationService } from '../../services/evaluation.service';
import { Evaluation } from '../..//models/evaluation.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-evaluation',
  templateUrl: './list-evaluation.component.html',
  styleUrls: ['./list-evaluation.component.css']
})
export class ListEvaluationComponent implements OnInit {


 constructor(private evaluationService: EvaluationService,private route: ActivatedRoute,private router: Router) { }


 evaluations: any;
 currentEvaluation = null;
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
   this.evaluationService.findById(id)
     .subscribe(
       (data: any) => {
         this.evaluations = data.evaluations;
         console.log(data.evaluations);
    
       },
       error => {
         console.log(error);
       });
 }

 refreshList() {
   this.retrieveTutorials(this.id);
   this.currentEvaluation = null;
   this.currentIndex = -1;
 }

 setActiveTutorial(evaluation, index) {
   this.currentEvaluation = evaluation;
   this.currentIndex = index;
 }

 removeAllTutorials() {
   this.evaluationService.deleteAll()
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
   this.evaluationService.findByTitle(this.title)
     .subscribe(
       data => {
         this.evaluations = data;
         console.log(data);
       },
       error => {
         console.log(error);
       });
 }

}
