import { Post } from '../models/post';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
private posts: Post[] = [];
private postsUpdated = new Subject<Post[]>();

constructor(private httpClient: HttpClient){}

//gets a copy of posts
getPosts() {
this.httpClient.get<{message:string, posts: Post[]}>('http://localhost:3000/api/posts').subscribe((postData) => {
this.posts = postData.posts;
this.postsUpdated.next([...this.posts]);
});
return [ ...this.posts ];
}
getPostUpdateListener() {
    return this.postsUpdated.asObservable();
    }

//insert in our posts
addPost(title: string, content: string) {
const post: Post = {
title: title,
content: content
};
this.posts.push(post);
this.postsUpdated.next([...this.posts]);

this.httpClient.post<{ message: string }>("http://localhost:3000/api/posts", post).subscribe((responseData) => {
    console.log(responseData.message);
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
    });

    
}


}