import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient } from '@angular/common/http';
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { PostsService } from '../posts.service';
import { MaterialModule } from '../../material/material.module';
import { TutorialService } from '../../services/tutorial.service';
@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})

export class AddClassComponent implements OnInit {

  constructor( private httpClient: HttpClient,private tutorialService: TutorialService) { }

  tutorial = {
    title: '',
    description: '',
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
      description: this.tutorial.description
    };

    this.tutorialService.create(data)
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
      published: false
    };
  }



   

  ngOnInit() {
  }

}
