import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Post } from "../post.model";
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { TutorialService } from '../../services/tutorial.service';
import { Tutorial } from '../..//models/tutorial.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit, OnDestroy{

  //Recieve Data Posts
  @Input() posts: Post[] = [];
  private postsSub: Subscription;
  // storedPosts: Post[] = [];
   // onPostAdded(post) {
   //   console.log("postlist recieved");
    //this.storedPosts.push(post);
   // }
  constructor(private tutorialService: TutorialService,    private route: ActivatedRoute,
    private router: Router) { }


  tutorials: any;
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
  
      this.tutorialService.getAll(params)
        .subscribe(
          response => {
            const { tutorials, totalItems } = response;
            this.tutorials = tutorials;
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
  
    setActiveTutorial(tutorial, index): void {
      console.log("Clicked on " + tutorial + " index "+ index);
      this.currentTutorial = tutorial;
      this.currentIndex = index;
     // this.router.navigate(['/tutorials/{{tutorial.id}}']);
    }
  
    removeAllTutorials(): void {
      this.tutorialService.deleteAll()
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
      this.tutorialService.findByTitle(this.title)
        .subscribe(
          data => {
            this.tutorials = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    ngOnDestroy() {
    
      }
}
