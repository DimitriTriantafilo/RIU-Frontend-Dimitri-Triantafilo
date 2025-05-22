import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroCrudComponent } from './super-hero-crud.component';

describe('SuperHeroCrudComponent', () => {
  let component: SuperHeroCrudComponent;
  let fixture: ComponentFixture<SuperHeroCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperHeroCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
