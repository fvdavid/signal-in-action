import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DessertFilter } from './dessert-filter';
import { Dessert } from './dessert';
import { toPromise } from '../shared/to-promise';

const dataFile = '/assets/desserts.json';

@Injectable({
  providedIn: 'root',
})
export class DessertService {
  #http = inject(HttpClient);

  constructor() {}

  find(filter: DessertFilter): Observable<Dessert[]> {
    return this.#http
      .get<Dessert[]>(dataFile)
      .pipe(
        map((result) =>
          result.filter(
            (d) =>
              d.originalName
                .toLowerCase()
                .includes(filter.originalName.toLowerCase()) &&
              d.englishName
                .toLowerCase()
                .includes(filter.englishName.toLowerCase())
          )
        )
      );
  }

  findPromise(
    filter: DessertFilter,
    abortSignal: AbortSignal
  ): Promise<Dessert[]> {
    return toPromise(this.find(filter), abortSignal);
  }

  findById(id: number): Observable<Dessert | undefined> {
    return this.#http
      .get<Dessert[]>(dataFile)
      .pipe(map((r) => r.find((d) => d.id == id)));
  }

  findPromisById(
    id: number,
    abortSignal?: AbortSignal
  ): Promise<Dessert | undefined> {
    return toPromise(this.findById(id), abortSignal);
  }
}
