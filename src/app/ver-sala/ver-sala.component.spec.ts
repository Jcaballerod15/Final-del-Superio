import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSalaComponent } from './ver-sala.component';

describe('VerSalaComponent', () => {
  let component: VerSalaComponent;
  let fixture: ComponentFixture<VerSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
