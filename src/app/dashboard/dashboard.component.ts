import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  storedPosts = [];
  onPostAdded(post) {
  this.storedPosts.push(post);
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
