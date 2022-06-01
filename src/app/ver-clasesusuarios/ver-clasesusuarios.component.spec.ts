import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerClasesusuariosComponent } from './ver-clasesusuarios.component';

describe('VerClasesusuariosComponent', () => {
  let component: VerClasesusuariosComponent;
  let fixture: ComponentFixture<VerClasesusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerClasesusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerClasesusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
