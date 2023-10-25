import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi =
    'https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20';

  private key =
    'Vt8XtPfjYqA_w-ueoUdz_uEjCPKuBltWGesNpEEQDKuNEsEOVQJwNtJDd80iBPFXJj3SdAUanL0NkGcbelMQq3OGar7UhgwKSQ7nf9wBqBgiViknRXQHJ8906RvTY3Yx';

  constructor(private http: HttpClient) {}

  public getData(ciudad: String): Observable<any> {
    if (typeof ciudad === 'string') {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.key}`,
      });

      const params = new HttpParams()
        .set('term', 'restaurants')
        .set('location', ciudad)
        .set('limit', '20');

      return this.http.get(this.key, { headers, params });
    } else {
      console.error('city no es una cadena válida');
      return throwError('Error: ciudad no es una cadena válida');
    }
  }
}
