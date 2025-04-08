import { Injectable } from '@angular/core';
import { lastValueFrom, Observable, of } from 'rxjs';

export type DessertIdToRatingMap = Record<number, number>;

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  loadExpertRatings(): Observable<DessertIdToRatingMap> {
    return of({
      10: 500,
    });
  }

  loadExpertRatingsPromise(): Promise<DessertIdToRatingMap> {
    return lastValueFrom(this.loadExpertRatings());
  }
}
