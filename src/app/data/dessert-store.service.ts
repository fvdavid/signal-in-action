import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { DessertService } from './dessert.service';
import { DessertIdToRatingMap, RatingService } from './rating.service';
import { debounceSignal } from '../shared/debounce-signal';
import { DessertFilter } from './dessert-filter';
import { Dessert } from './dessert';
import { debounceTrue } from '../shared/resource-utils';
import { getErrorMessage } from '../shared/get-error-message';

type Requested = undefined | true;

@Injectable({
  providedIn: 'root',
})
export class DessertStoreService {
  #dessertService = inject(DessertService);
  #ratingService = inject(RatingService);

  readonly originalName = signal('');
  readonly englishName = signal('');

  #dessertsCriteria = computed(() => ({
    originalName: this.originalName(),
    englishName: this.englishName(),
  }));

  #debouncedCriteria = debounceSignal(this.#dessertsCriteria, 300);

  #ratingsRequested = signal<Requested>(undefined);

  #dessertsResource = resource({
    request: this.#debouncedCriteria,
    loader: (p) => {
      return this.#dessertService.findPromise(p.request, p.abortSignal);
    },
  });

  #ratingsResource = resource({
    request: this.#ratingsRequested,
    loader: () => {
      return this.#ratingService.loadExpertRatingsPromise();
    },
  });

  readonly desserts = computed(() => this.#dessertsResource.value() ?? []);
  readonly ratings = computed(() => this.#ratingsResource.value() ?? {});
  readonly ratedDesserts = computed(() =>
    toRated(this.desserts(), this.ratings())
  );

  readonly loading = debounceTrue(
    () =>
      this.#ratingsResource.isLoading() || this.#dessertsResource.isLoading(),
    500
  );
  readonly error = computed(() =>
    getErrorMessage(
      this.#dessertsResource.error() || this.#ratingsResource.error()
    )
  );

  loadRatings(): void {
    this.#ratingsRequested.set(true);
    this.#ratingsResource.reload();
  }

  updateFilter(filter: DessertFilter): void {
    this.originalName.set(filter.originalName);
    this.englishName.set(filter.englishName);
  }

  updateRating(id: number, rating: number): void {
    this.#ratingsResource.update((r) => ({
      ...r,
      [id]: rating,
    }));
  }
}

function toRated(
  desserts: Dessert[],
  ratings: DessertIdToRatingMap
): Dessert[] {
  return desserts.map((d) =>
    ratings[d.id] ? { ...d, rating: ratings[d.id] } : d
  );
}
