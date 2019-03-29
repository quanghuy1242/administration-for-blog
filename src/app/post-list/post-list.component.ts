import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Blog } from '../models/blog.model';
import { Observable, merge } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { BlogService } from '../services/blog.service';
import { DialogPreviewComponent } from '../dialog-preview/dialog-preview.component';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<Blog>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'day', 'actions'];

  constructor(
    private blogService: BlogService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.blogService.getBlogs().subscribe(blogs => {
      this.dataSource.data = blogs;
    })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  preview(title: string, rawContent: string): void {
    this.dialog.open(DialogPreviewComponent, {
      width: '80%',
      data: {
        title: title,
        content: rawContent
      },
      disableClose: true
    })
  }

  delete(id: string): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '500px',
      data: {
        title: "Confirm",
        content: "Delete this post?"
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isAccept => {
      if (isAccept) {
        this.blogService.deletePost(id)
          .then(() => {
            this.dialog.open(DialogAlertComponent, {
              width: '500px',
              data: {
                title: "Information",
                content: "Your post is deleted successfully!"
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
