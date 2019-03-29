import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  editorOptions = {
    theme: 'vs-light',
    language: 'markdown',
    wordWrap: 'on'
  };
  code: string = "";
  blogId: string;
  blog: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get('id');
    this.getBlog(this.blogId);
  }

  getBlog(id: string): void {
    this.blogService.getBlog(id).subscribe(blog => {
      if (!blog.title) {
        this.router.navigate(['/']);
      } else {
        this.blog = blog;
        this.code = this.blog.content;
      }
    });
  }

  preview(): void {
    console.log(this.code);
  }

}
