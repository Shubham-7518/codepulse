import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-postpost-list',
  templateUrl: './postpost-list.component.html',
  styleUrls: ['./postpost-list.component.css']
})
export class PostpostListComponent implements OnInit {

  blogPosts$?:Observable<BlogPost[]>;

  constructor(private blogPostService:BlogPostService){

  }


  ngOnInit(): void {
    // get all blog post from api
    this.blogPosts$ = this.blogPostService.getAllBlogPost();

  }

}
