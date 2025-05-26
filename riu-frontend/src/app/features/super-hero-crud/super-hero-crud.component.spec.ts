import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperHeroCrudComponent } from './super-hero-crud.component';
import { SuperHeroService } from '../../core/services/super-hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SuperHeroCrudComponent', () => {
  let component: SuperHeroCrudComponent;
  let fixture: ComponentFixture<SuperHeroCrudComponent>;
  let mockSuperHeroService: jasmine.SpyObj<SuperHeroService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<any>>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockSuperHeroService = jasmine.createSpyObj('SuperHeroService', [
      'getHeroById',
      'addNewHero',
      'editHero',
    ]);

    mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);

    mockActivatedRoute = {
      params: of({ id: '1' }),
      snapshot: { params: { id: '1' } },
    };

    await TestBed.configureTestingModule({
      imports: [
        SuperHeroCrudComponent,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: SuperHeroService, useValue: mockSuperHeroService },
        { provide: Router, useValue: mockRouter },
        { provide: MatDialog, useValue: mockDialog },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperHeroCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('inicializacion', () => {
    it('deberia crear el componente', () => {
      expect(component).toBeTruthy();
    });
    it('Cuando no hay id en los params, deberia crear el formulario vacío', () => {
      mockActivatedRoute.params = of({}); // Sin ID
      fixture.detectChanges();
      component.buildForm();

      expect(component.heroForm.value).toEqual({
        name: '',
        realName: '',
        id: 0,
        abilities: [],
        img: '',
      });
    });

    it('Cuando no se encuentra al super héroe (con id inventado) deberia redirigir a hero-list', () => {
      mockSuperHeroService.getHeroById.and.returnValue(undefined);
      mockActivatedRoute.params = of({ id: '999' }); // ID inexistente
      fixture.detectChanges();

      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('hero-list');
    });
  });
});
