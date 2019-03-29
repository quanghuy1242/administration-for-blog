import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOptionSideComponent } from './post-option-side.component';

describe('PostOptionSideComponent', () => {
  let component: PostOptionSideComponent;
  let fixture: ComponentFixture<PostOptionSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOptionSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOptionSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
