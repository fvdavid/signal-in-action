import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Dessert } from '../../../data/dessert';
import { injectCdBlink } from '../../../shared/inject-cd-blink';
import { RouterLink } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-dessert-card',
  imports: [RouterLink, RatingComponent],
  templateUrl: './dessert-card.component.html',
  styleUrl: './dessert-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DessertCardComponent {
  dessert = input.required<Dessert>();
  blink = injectCdBlink();

  ratingChange = output<number>();

  updateRating(newRating: number): void {
    this.ratingChange.emit(newRating);
  }
}
