import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProductData } from '../interfaces';

@Injectable({
  providedIn: 'root',
})

export class ProductRemoteService {
  constructor(
    private readonly http: HttpClient,
  ) {}

  public getData(): Promise<IProductData> {
    return this.http.get<IProductData>('https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json').toPromise();
  }
}
