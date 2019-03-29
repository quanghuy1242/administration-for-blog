import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../models/dialog-type.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import MarkdownIt from 'markdown-it';

@Component({
  selector: 'app-dialog-preview',
  templateUrl: './dialog-preview.component.html',
  styleUrls: ['./dialog-preview.component.css']
})
export class DialogPreviewComponent implements OnInit {
  md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

}
