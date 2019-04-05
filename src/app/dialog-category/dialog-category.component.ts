import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../models/dialog-type.model';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-dialog-category',
  templateUrl: './dialog-category.component.html',
  styleUrls: ['./dialog-category.component.css']
})
export class DialogCategoryComponent implements OnInit {
  items: Category[] = [
    { id: '1', name: 'Dramma' },
    { id: '2', name: 'Hornor' },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

  addCategory(name: string): void {
    this.items.push({
      id: (this.items.length + 1).toString(),
      name: name
    })
  }

}
