import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-route-calculated',
  templateUrl: './route-calculated.component.html',
  styleUrls: ['./route-calculated.component.scss'],
})

export class RouteCalculatedComponent {
  @Output() newSearch: EventEmitter<boolean> = new EventEmitter<boolean>()

  resetForm(): void {
    this.newSearch.emit(true)
  }
}
