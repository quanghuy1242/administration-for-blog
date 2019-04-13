import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { MatChipInputEvent } from '@angular/material';

export interface OptionSelected {
  category: string;
  tags: string[];
}

@Component({
  selector: 'app-post-option-side',
  templateUrl: './post-option-side.component.html',
  styleUrls: ['./post-option-side.component.css']
})
export class PostOptionSideComponent implements OnInit {
  categories: Category[];
  // ChipInput
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  options: OptionSelected = {
    category: '',
    tags: []
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

  addChip(event: MatChipInputEvent): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.replace(/\s/g, '');
      this.options.tags.push(value.trim().toLowerCase());
    }
    if (input) {
      input.value = '';
    }
  }

  removeChip(tag: string): void {
    this.options.tags = this.options.tags.filter(value => value !== tag);
  }
}
