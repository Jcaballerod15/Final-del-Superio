import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerClaseComponent } from './ver-clase.component';

describe('VerClaseComponent', () => {
  let component: VerClaseComponent;
  let fixture: ComponentFixture<VerClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerClaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
