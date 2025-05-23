import { Component } from '@angular/core';
import { SuperHeroService } from '../../core/services/super-hero.service';
import { SuperHero } from '../../@shared/interfaces/super-hero-interfaces';

@Component({
  selector: 'app-super-hero-list',
  imports: [],
  templateUrl: './super-hero-list.component.html',
  styleUrl: './super-hero-list.component.scss'
})
export class SuperHeroListComponent {
  reducedHeroList: SuperHero[] = []

  constructor(private superHeroService: SuperHeroService){
    this.reducedHeroList = this.superHeroService.superHeroList();
    console.log(this.reducedHeroList)
  }
}
