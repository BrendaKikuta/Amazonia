import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root',
 })

export class RoutesListService {
  private url: string = 'https://mocki.io/v1/10404696-fd43-4481-a7ed-f9369073252f'

  constructor(private httpClient: HttpClient) { }

  getRoute(data: {}): Observable<{}> {
    return this.httpClient
      .get(this.url, data)
  }
  
  getLastRoutes(): Observable<{}> {
    return this.httpClient
      .get(this.url)
  }
}
