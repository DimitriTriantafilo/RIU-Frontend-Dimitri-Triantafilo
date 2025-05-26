import { Component, Inject, input, OnInit } from '@angular/core';
import { SuperHero } from '../../interfaces/super-hero-interfaces';
import { CommonModule, NgOptimizedImage, DOCUMENT } from '@angular/common';
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
export class HeroCardComponent implements OnInit {
  superHero = input.required<SuperHero>();
  mode = input.required<'list' | 'edit' | 'create'>();

  priority = input<boolean>();

  constructor(
    private superHeroService: SuperHeroService,
    private router: Router,
    private dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const imgUrl = new URL(
      this.superHero().img.length && this.superHero().img.startsWith('http')
        ? this.superHero().img
        : 'https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
    );
    const domain = imgUrl.origin;

    if (!this.document.querySelector(`link[href="${domain}"]`)) {
      const link = this.document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      this.document.head.appendChild(link);
    }
  }

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

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src =
      'https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg';
    // Opcional: remover atributos de NgOptimizedImage para el fallback
    img.removeAttribute('ngSrc');
    img.removeAttribute('ngSrcset');
  }
}
