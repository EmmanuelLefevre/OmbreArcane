import { Card } from './_interfaces/card.model';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CardComponent, CommonModule]
})

export class App implements OnInit {
  cardsList: Card[] = [];

  constructor(private http: HttpClient,
              private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.http.get<Card[]>('/json/cards.json').subscribe({
      next: (data) => {
        this.cardsList = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur de chargement du JSON', err);
      }
    });
  }
}
