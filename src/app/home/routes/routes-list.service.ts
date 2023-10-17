import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, retry, throwError } from "rxjs"

@Injectable({
  providedIn: 'root',
 })

export class RoutesListService {
  private url: string = 'https://mocki.io/v1/10404696-fd43-4481-a7ed-f9369073252f'

  constructor(private httpClient: HttpClient) { }

  getRoute(data: {}): Observable<{}> {
    return this.httpClient
      .get(this.url, {params: data}).pipe(
        retry(3),
        catchError(this.handleError())
      )
  }
  
  getLastRoutes(): Observable<Object> {
    return this.httpClient
      .get(this.url).pipe(
        retry(3),
        catchError(this.handleError())
      )
  }

  private handleError(): any {
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
