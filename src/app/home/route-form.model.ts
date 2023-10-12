import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export enum key {
  backspace = 'Backspace'
} 

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

  getDroneStartCoordinate(value: KeyboardEvent): void {
    this.setStartCoordinate(value)

    if (this.startCoordinate.length > 3) return this.setErrorMessage()

    this.showWarningMessage = false
    this.disabled = false
  }

  private setStartCoordinate(value: KeyboardEvent): void {
    switch (value.code) {
      case key.backspace:
        this.startCoordinate.slice(0, 1)
        break;
      default:
        this.startCoordinate += value.key
        break;
    }
  }

  private setErrorMessage(): void {
    this.showWarningMessage = true  
    this.disabled = true  
  }
}
