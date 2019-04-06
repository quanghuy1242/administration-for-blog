import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

export interface OptionSelected {
  category: string;
}

@Component({
  selector: 'app-post-option-side',
  templateUrl: './post-option-side.component.html',
  styleUrls: ['./post-option-side.component.css']
})
export class PostOptionSideComponent implements OnInit {
  categories: Category[];

  options: OptionSelected = {
    category: ''
  };
  
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
