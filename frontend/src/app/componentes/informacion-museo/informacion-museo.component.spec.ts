import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionMuseoComponent } from './informacion-museo.component';

describe('InformacionMuseoComponent', () => {
  let component: InformacionMuseoComponent;
  let fixture: ComponentFixture<InformacionMuseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionMuseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionMuseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
