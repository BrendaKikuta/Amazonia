import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouteFormModel } from './route-form.model';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss'],
})

export class RouteFormComponent {
  showWarningMessage: boolean = false
  disabled: boolean = true
  startCoordinate: string = ''
  routeFormModel = new RouteFormModel()

  getDroneStartCoordinate(value: KeyboardEvent): void {
    this.startCoordinate = this.routeFormModel.setStartCoordinate(value, this.startCoordinate)

    if (this.startCoordinate.length > 3) return this.setErrorMessage()

    this.showWarningMessage = false
    this.disabled = false
  }

  private setErrorMessage(): void {
    this.showWarningMessage = true  
    this.disabled = true  
  }
}
