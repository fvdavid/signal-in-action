import { Component, inject } from '@angular/core';
import { DessertStoreService } from '../../data/dessert-store.service';
import { FormsModule } from '@angular/forms';
import { DessertCardComponent } from "./dessert-card/dessert-card.component";

@Component({
  selector: 'app-desserts',
  imports: [FormsModule, DessertCardComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.scss',
})
export class DessertsComponent {
  #store = inject(DessertStoreService);

  originalName = this.#store.originalName;
  englishName = this.#store.englishName;
  loading = this.#store.loading;

  ratedDesserts = this.#store.ratedDesserts;

  loadRatings(): void {
    this.#store.loadRatings();
  }

  updateRating(id: number, rating: number): void {
    this.#store.updateRating(id, rating);
  }
}
