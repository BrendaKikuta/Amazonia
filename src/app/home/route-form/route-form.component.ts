import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouteFormModel } from './route-form.model';
import { RoutesListService } from '../routes-list.service';

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
  disabledResetForm: boolean = true
  startCoordinate: string = ''
  pickUp: string = ''
  destination: string = ''
  inputText: string = 'Drone Start'
  routeFormModel: RouteFormModel = new RouteFormModel()

  constructor(private routesListService: RoutesListService) {}

  verifyCoordinate(coordinate: string, buttonId: string, className: string): void {
    if (coordinate.length > 3 || (!coordinate || coordinate.length < 1)) return this.setErrorMessage(buttonId, className, coordinate.length)

    this.enableButton(buttonId, className)
  }

  goToNextStep(currentSessionId: string, sessionId: string, className: string, text: string): void {
    this.routeFormModel.addClass(currentSessionId, className)
    this.routeFormModel.addClass('resetFormButton', 'active')
    this.routeFormModel.removeClass(sessionId, className)

    this.inputText = text
    this.disabled = true
    this.disabledResetForm = false
  }

  resetForm(): void {
    this.showWarningMessage = false
    this.disabled = true
    this.disabledResetForm = true
    this.startCoordinate = ''
    this.pickUp = ''
    this.destination = ''
    this.inputText = 'Drone Start'

    this.manageClasses()
  }
  
  calculateRoute() {
    this.routesListService.getRoute({}).subscribe(response => {
      console.log(response)
    })
  }

  private setErrorMessage(buttonId: string, className: string, coordinateLength: number): void {
    this.routeFormModel.removeClass(buttonId, className)

    if (coordinateLength > 3) {
      this.showWarningMessage = true  
      this.disabled = true  
    }
  }

  private enableButton(buttonId: string, className: string): void {
    this.showWarningMessage = false
    this.disabled = false

    this.routeFormModel.addClass(buttonId, className)
  }

  private manageClasses(): void {
    this.routeFormModel.removeClass('droneStart', 'folded')
    this.routeFormModel.addClass('pickUp', 'folded')
    this.routeFormModel.addClass('destination', 'folded')
    this.routeFormModel.removeClass('droneStartButton', 'active')
    this.routeFormModel.removeClass('pickUpButton', 'active')
    this.routeFormModel.removeClass('destinationButton', 'active')
    this.routeFormModel.removeClass('resetFormButton', 'active')
  }
}
