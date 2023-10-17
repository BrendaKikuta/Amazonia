import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core'; 

import { RouteFormComponent } from './route-form/route-form.component';
import { RoutesListComponent } from './routes-list/routes-list.component';

@Component({
  standalone: true,
  imports: [CommonModule, RoutesListComponent, RouteFormComponent],
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
})

export class RoutesComponent {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>()

  getLoading(): void {
    this.loading.emit(true)
  }
}
