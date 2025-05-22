import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroListComponent } from './super-hero-list.component';

describe('SuperHeroListComponent', () => {
  let component: SuperHeroListComponent;
  let fixture: ComponentFixture<SuperHeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperHeroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
