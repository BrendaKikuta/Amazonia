import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { ManageClassesModel } from '../../models/manage-classes.model';
import { RoutesListService } from '../routes-list.service';
import { RouteCalculatedComponent } from './route-calculated/route-calculated.component';
import { DroneRoute } from '../../interfaces/routes.interfaces';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, LoaderComponent, RouteCalculatedComponent],
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
  manageClassesModel: ManageClassesModel = new ManageClassesModel()
  loading: boolean = false
  calculated: boolean = false
  caculatedRoute: DroneRoute
  
  constructor(private routesListService: RoutesListService) {}
  
  verifyCoordinate(coordinate: string, buttonId: string, className: string): void {
    if (coordinate.length > 2 || (!coordinate || coordinate.length < 1)) return this.setErrorMessage(buttonId, className, coordinate.length)
    
    this.enableButton(buttonId, className)
  }
  
  goToNextStep(currentSessionId: string, sessionId: string, className: string, text: string): void {
    this.manageClassesModel.addClass(currentSessionId, className)
    this.manageClassesModel.addClass('resetFormButton', 'active')
    this.manageClassesModel.removeClass(sessionId, className)
    
    this.inputText = text
    this.disabled = true
    this.disabledResetForm = false
  }
  
  resetForm(): void {
    this.showWarningMessage = false
    this.disabled = true
    this.disabledResetForm = true
    this.loading = false
    this.calculated = false
    this.startCoordinate = ''
    this.pickUp = ''
    this.destination = ''
    this.inputText = 'Drone Start'
    
    this.manageClasses()
  }
  
  calculateRoute() {
    this.loading = true
    
    const data = {
      droneStart: this.startCoordinate,
      objectPickUp: this.pickUp,
      deliveryDestination: this.destination
    }
    
    this.routesListService.getRoute(data).subscribe(response => {
      this.loading = false
      this.calculated = true

      this.setDroneCoordinates()
    })
  }

  private setDroneCoordinates(): void {
    this.caculatedRoute = {
      droneStart: this.startCoordinate,
      pickUp: this.pickUp,
      done: this.destination,
      time: 300
    }
  }
  
  private setErrorMessage(buttonId: string, className: string, coordinateLength: number): void {
    this.manageClassesModel.removeClass(buttonId, className)
    
    if (coordinateLength > 2) {
      this.showWarningMessage = true  
      this.disabled = true  
    }
  }
  
  private enableButton(buttonId: string, className: string): void {
    this.showWarningMessage = false
    this.disabled = false
    
    this.manageClassesModel.addClass(buttonId, className)
  }
  
  private manageClasses(): void {
    this.manageClassesModel.removeClass('droneStart', 'folded')
    this.manageClassesModel.addClass('pickUp', 'folded')
    this.manageClassesModel.addClass('destination', 'folded')
    this.manageClassesModel.removeClass('droneStartButton', 'active')
    this.manageClassesModel.removeClass('pickUpButton', 'active')
    this.manageClassesModel.removeClass('destinationButton', 'active')
    this.manageClassesModel.removeClass('resetFormButton', 'active')
  }
}
