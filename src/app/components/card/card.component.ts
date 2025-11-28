import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../_interfaces/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class CardComponent {
  private readonly iconFormat = 'png';
  private readonly patternFormat = 'png';

  @Input() card!: Card;

  get illustrationPath(): string {
    return `/cards-img/${this.card.img_name}`;
  }

  get patternPath(): string {
    return `/pattern/${this.card.pattern}.${this.patternFormat}`;
  }

  getManaIconPath(manaColor: string): string {
    return `/icons/${manaColor}_icon.${this.iconFormat}`;
  }
}
