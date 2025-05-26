import { Component, inject } from '@angular/core';
import { SuperHeroService } from '../../../core/services/super-hero.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
//Componente diseñado para simular un interceptor, si uutilizara solicitudes http, utilizaria un interceptor como provider para interceptar todos los pedidos y ejecutar el loading hasta recibir respeusta
export class SpinnerComponent {
  superHeroService = inject(SuperHeroService);
}
