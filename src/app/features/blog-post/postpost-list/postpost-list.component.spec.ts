import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpostListComponent } from './postpost-list.component';

describe('PostpostListComponent', () => {
  let component: PostpostListComponent;
  let fixture: ComponentFixture<PostpostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostpostListComponent]
    });
    fixture = TestBed.createComponent(PostpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
