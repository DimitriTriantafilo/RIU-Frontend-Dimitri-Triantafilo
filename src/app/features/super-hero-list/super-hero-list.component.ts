import { Component, computed, effect, signal } from '@angular/core';
import { SuperHeroService } from '../../core/services/super-hero.service';
import { SuperHero } from '../../@shared/interfaces/super-hero-interfaces';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from '../../@shared/components/hero-card/hero-card.component';
import { UppercaseDirective } from '../../@shared/directives/uppercase.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-super-hero-list',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    HeroCardComponent,
    UppercaseDirective,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatSelectModule,
  ],
  templateUrl: './super-hero-list.component.html',
  styleUrl: './super-hero-list.component.scss',
})
export class SuperHeroListComponent {
  currentPage = signal<number>(1);
  pageSize = signal<number>(5);
  nameFilter = signal<string>('');

  constructor(private superHeroService: SuperHeroService) {
    effect(() => {
      this.nameFilter(); // Track dependency
      this.pageSize(); // Track dependency
      this.currentPage.set(1); // Always reset to page 1
    });
  }

  /*
  filteredAndPaginatedList es un Computed que va a ajustar la lista de superHéroes dependiendo del filtro por nombre y paginado.
  ! Si el filtrado de la tabla requisiese que haga un llamado a una api
  ! por cada cambio, le agregaría un debounceTime a nameFilter ( conectaria ngModel con un subject o utilizaria reactive forms), 
  ! para evitar enviar una solicitud por cada caracter .
  @returns {SuperHero[]} 
  */
  filteredAndPaginatedList = computed<SuperHero[]>(() => {
    const filteredList: SuperHero[] =
      this.superHeroService.getHeroListByNameSection(this.nameFilter());
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    return filteredList.slice(startIndex, startIndex + this.pageSize());
  });

  pagesList = computed<number[]>(() => {
    const totalPages = Math.ceil(
      this.superHeroService.getHeroListByNameSection(this.nameFilter()).length /
        this.pageSize()
    );
    let pagesArray = [];

    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  });

  previousPage() {
    this.currentPage.update((e) => e - 1);
  }
  nextPage() {
    this.currentPage.update((e) => e + 1);
  }
}
