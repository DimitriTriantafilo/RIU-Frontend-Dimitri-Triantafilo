import { Component, input } from '@angular/core';
import { SuperHero } from '../../../../@shared/interfaces/super-hero-interfaces';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss',
})
export class HeroCardComponent {
  superHero = input.required<SuperHero>();
}
