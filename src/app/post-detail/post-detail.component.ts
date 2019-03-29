import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import MarkdownIt from 'markdown-it';
import { MatDialog } from '@angular/material';
import { DialogPreviewComponent } from '../dialog-preview/dialog-preview.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';

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
  md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router,
    private dialog: MatDialog
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
        this.isLoading = false;
      }
    });
  }

  preview(): void {
    this.dialog.open(DialogPreviewComponent, {
      width: '80%',
      data: {
        title: this.blog.title,
        content: this.md.render(this.code)
      },
      disableClose: true
    })
  }

  update(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '500px',
      data: {
        title: "Confirm",
        content: "Update this post?"
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isAccept => {
      if (isAccept) {
        this.blogService.updatePost(this.blogId, { title: this.blog.title, content: this.code })
          .then(() => {
            this.dialog.open(DialogAlertComponent, {
              width: '500px',
              data: {
                title: "Information",
                content: "Your post is update successfully!"
              },
              disableClose: true
            })
          })
          .catch(() => {
            this.dialog.open(DialogAlertComponent, {
              width: '500px',
              data: {
                title: "Error",
                content: "An error happennes. Try again!"
              },
              disableClose: true
            })
          })
      }
    })
  }
  
}
