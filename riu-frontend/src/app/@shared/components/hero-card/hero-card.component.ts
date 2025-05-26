import { Component, input } from '@angular/core';
import { SuperHero } from '../../interfaces/super-hero-interfaces';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { SuperHeroService } from '../../../core/services/super-hero.service';
import { AlertComponent } from '../alert/alert.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-card',
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    NgOptimizedImage,
  ],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss',
})
export class HeroCardComponent {
  constructor(
    private superHeroService: SuperHeroService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  superHero = input.required<SuperHero>();
  mode = input.required<'list' | 'edit' | 'create'>();

  deleteHero() {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        message: 'Esta seguro de Eliminar a ' + this.superHero().name + '?',
      },
      height: '150px',
      width: '70%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.superHeroService.deleteHeroById(this.superHero().id);
        this.router.navigateByUrl('/hero-list');
      }
    });
  }
}
