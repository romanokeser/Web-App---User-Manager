import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { NgForm } from "@angular/forms";

import { MaterialModule } from '../../material/material.module';
import { EvaluationService } from '../../services/evaluation.service';


@Component({
  selector: 'app-create-evaluation',
  templateUrl: './create-evaluation.component.html',
  styleUrls: ['./create-evaluation.component.css']
})
export class CreateEvaluationComponent implements OnInit {



  constructor( private httpClient: HttpClient, private evaluationservice: EvaluationService, private evaluationService: EvaluationService,
    private route: ActivatedRoute,
    private router: Router) { }
  eid = null;

  message = '';
  evaluation = {
    title: '',
    number: 0,
  };
  submitted = false;

  refresh() : void{
    window.location.reload();
  }


  saveTutorial(): void {
    const data = {
      id: this.eid,
      title: this.evaluation.title,
      number: this.evaluation.number
    };

    this.evaluationservice.create(data)
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
    this.evaluation = {
      
      title: '',
      number: 0
    };
  }


  ngOnInit() {
    this.message = '';
    this.eid = this.route.snapshot.paramMap.get('id');
    console.log("Id is "+ this.eid);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

}
