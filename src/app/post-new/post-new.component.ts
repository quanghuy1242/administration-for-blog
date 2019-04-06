import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogPreviewComponent } from '../dialog-preview/dialog-preview.component';
import { MatDialog } from '@angular/material';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { BlogService } from '../services/blog.service';
import { Timestamp } from '@firebase/firestore-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {
  editorOptions = {
    theme: 'vs-light',
    language: 'markdown',
    wordWrap: 'on'
  };
  title: string = "";
  content: string = "";
  @ViewChild('option') option;

  constructor(
    private dialog: MatDialog,
    private blogService: BlogService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.selectedFirstCategory();
  }

  selectedFirstCategory(): void {
    this.option.options.category = "8yOgXtjmkpaBOT7Hb7pv";
  }

  preview(): void {
    this.dialog.open(DialogPreviewComponent, {
      width: '80%',
      data: {
        title: !this.title.trim().length ? '<unknown>' : this.title,
        content: !this.content.trim().length ? 'unknown' : this.content
      },
      disableClose: true
    })
  }

  addPost(option: any): void {
    console.log(option);
    if (this.title === "" || this.content === "") {
      this.dialog.open(DialogAlertComponent, {
        width: '500px',
        data: {
          title: "Warning",
          content: "Cannot empty!"
        },
        disableClose: true
      })
      return;
    }

    this.blogService.addPost({
      title: this.title,
      content: this.content,
      day: (new Date()) as unknown as Timestamp,
      isRichContent: true,
      category: option.category
    }).then(() => {
      this.dialog.open(DialogAlertComponent, {
        width: '500px',
        data: {
          title: "Information",
          content: "Your post is added successfully!"
        },
        disableClose: true
      }).afterClosed().subscribe(() => this.router.navigate(['/post']))
    }).catch((e: any) => {
      this.dialog.open(DialogAlertComponent, {
        width: '500px',
        data: {
          title: "Error",
          content: "An error happennes. Try again!"
        },
        disableClose: true
      })
      console.log(e);
    })
  }

}
