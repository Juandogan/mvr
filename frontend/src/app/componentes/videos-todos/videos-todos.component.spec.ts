import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosTodosComponent } from './videos-todos.component';

describe('VideosTodosComponent', () => {
  let component: VideosTodosComponent;
  let fixture: ComponentFixture<VideosTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
