import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouteFormModel } from './route-form.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss'],
})

export class RouteFormComponent {
  showWarningMessage: boolean = false
  disabled: boolean = true
  startCoordinate: string = ''
  pickUp: string = ''
  destination: string = ''
  routeFormModel = new RouteFormModel()

  getDroneStartCoordinate(buttonId: string, className: string): void {
    if (this.startCoordinate.length > 3 || (!this.startCoordinate || this.startCoordinate.length < 1)) return this.setErrorMessage(buttonId, className)

    this.enableButton(buttonId, className)
  }

  goToNextStep(currentSessionId: string, sessionId: string, className: string): void {
    this.routeFormModel.addClass(currentSessionId, className)
    this.routeFormModel.removeClass(sessionId, className)
  }
  
  private setErrorMessage(buttonId: string, className: string): void {
    this.routeFormModel.removeClass(buttonId, className)

    if (this.startCoordinate.length > 3) {
      this.showWarningMessage = true  
      this.disabled = true  
    }
  }

  private enableButton(buttonId: string, className: string): void {
    this.showWarningMessage = false
    this.disabled = false

    this.routeFormModel.addClass(buttonId, className)
  }
}
