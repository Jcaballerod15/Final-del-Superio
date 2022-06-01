import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTodasclasesComponent } from './ver-todasclases.component';

describe('VerTodasclasesComponent', () => {
  let component: VerTodasclasesComponent;
  let fixture: ComponentFixture<VerTodasclasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTodasclasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTodasclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
