import { Component, OnInit } from '@angular/core';
import { RouteDetectService } from '../services/route-detect.service';
import { MatDialog } from '@angular/material';
import { DialogCategoryComponent } from '../dialog-category/dialog-category.component';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.css']
})
export class PostCrudComponent implements OnInit {

  constructor(
    private routeDetect: RouteDetectService,
    private dialog: MatDialog
  ) {}

  ngOnInit() { }

  openCategories(): void {
    this.dialog.open(DialogCategoryComponent, {
      width: '600px',
      height: '80vh',
      disableClose: true,
      data: { title: 'Categories', content: 'abc' }
    })
  }

}
