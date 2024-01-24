import { Component, Input } from '@angular/core';
import { TypographyComponent } from '../typography/typography.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
	@Input() city: string = "";
	@Input() price: string = "";
	@Input() priceCents: string = "";
}
