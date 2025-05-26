import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { SuperHero } from '../../@shared/interfaces/super-hero-interfaces';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SuperHeroService } from '../../core/services/super-hero.service';
import { HeroCardComponent } from '../../@shared/components/hero-card/hero-card.component';
import { debounceTime, Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { v4 as uuidv4 } from 'uuid';
import { AlertComponent } from '../../@shared/components/alert/alert.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-super-hero-crud',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    HeroCardComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './super-hero-crud.component.html',
  styleUrl: './super-hero-crud.component.scss',
})
export class SuperHeroCrudComponent implements OnInit, OnDestroy {
  heroForm!: FormGroup;
  title = signal<string>('CREA TU HÉROE');
  habilidadControl = new FormControl('');
  heroTemplate = signal<SuperHero>({
    name: '',
    realName: '',
    id: 0,
    abilities: [],
    img: '',
  });
  titleName: string | undefined = '';
  subscriptions: Subscription[] = [];
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private superHeroService: SuperHeroService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //En caso de recibir un Id, busco la existencia de un héroe con tal ID, en caso de encontrarlo
    this.route.params.subscribe((params) => {
      if (params['id']) {
        const editedSuperHero = this.superHeroService.getHeroById(params['id']);
        if (editedSuperHero) {
          this.buildForm(editedSuperHero);
          this.title.set('Edita a ' + editedSuperHero?.name);
          editedSuperHero ? this.heroTemplate?.set(editedSuperHero) : null;

          //Modifico el título añadiendo el nombre original del héroe
        } else {
          this.router.navigateByUrl('hero-list');
        }
      } else this.buildForm();
    });
  }

  //método para contruir el formulario, en caso de existir el héroe a editar,
  buildForm(existingHeroInfo?: SuperHero): void {
    this.heroForm = this.fb.group({
      name: [
        existingHeroInfo ? existingHeroInfo.name : '',
        [Validators.required],
      ], // Campo obligatorio
      realName: [
        existingHeroInfo ? existingHeroInfo.realName : '',
        [Validators.required],
      ],
      id: [existingHeroInfo ? existingHeroInfo.id : 0],
      abilities: this.fb.array(
        existingHeroInfo ? existingHeroInfo.abilities : []
      ),
      img: [
        existingHeroInfo ? existingHeroInfo.img : '',
        [Validators.required],
      ],
    });
    this.createFormControlsSubscriptionsToUpdateCard();
  }

  //Función que recorre todas las keys del formulario para agregarle una subscripción a su value changes y modificar la signal del superHeroe
  createFormControlsSubscriptionsToUpdateCard() {
    Object.keys(this.heroForm.controls).forEach((controlName) => {
      const control = this.heroForm.get(controlName);
      if (control) {
        this.subscriptions.push(
          control.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
            this.heroTemplate.update((hero) => {
              return { ...hero, [controlName]: value };
            });
          })
        );
      }
    });
  }

  get abilities(): FormArray {
    return this.heroForm.get('abilities') as FormArray;
  }

  addAbility(abilityName: string): void {
    if (this.habilidadControl.valid && this.habilidadControl.value?.length) {
      this.abilities.push(this.fb.control(abilityName));
      this.habilidadControl.reset();
    }
  }

  removeAbility(index: number): void {
    this.abilities.removeAt(index);
  }

  //Función para editar o crear un héroe. Si el Héroe tiene id, se procedera a editar al héroe, en caso de no tener Id, se le añadira un uuid y se creara un nuevo héroe

  postOrEditHero(): void {
    if (!this.heroForm.valid) {
      this.heroForm.markAllAsTouched();
    } else {
      const dialogRef = this.dialog.open(AlertComponent, {
        data: {
          message: !this.heroTemplate().id
            ? '¿Desea crear Héroe?'
            : '¿Desea editar a ' + this.heroForm.value.name + '?',
        },
        height: '150px',
        width: '200px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          if (!this.heroTemplate().id) {
            this.heroTemplate.update((hero) => {
              return {
                ...hero,
                id: uuidv4(),
              };
            });
            this.superHeroService.addNewHero(this.heroTemplate());
            this.router.navigateByUrl('hero-list');
          } else {
            this.superHeroService.editHero(this.heroTemplate());
            this.router.navigateByUrl('hero-list');
          }
        }
      });
    }
  }
  // me desuscribo al destruir el compoenente
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
