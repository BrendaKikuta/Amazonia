import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DroneRoute } from 'src/app/home/interfaces/routes.interfaces';

@Component({
  standalone: true,
  selector: 'app-route-calculated',
  templateUrl: './route-calculated.component.html',
  styleUrls: ['./route-calculated.component.scss'],
})
export class RouteCalculatedComponent implements OnInit {
  @Input() caculatedRoute: DroneRoute;
  @Output() newSearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  settedCoordinates: string;
  patter: string

  ngOnInit(): void {
    this.getSettedCoordinates();
    this.patter = '[a-hA-H]*'
  }

  getSettedCoordinates(): void {
    this.settedCoordinates = `Drone starts on ${this.caculatedRoute.droneStart.toUpperCase()}, picks up on ${this.caculatedRoute.pickUp.toUpperCase()}, and finish on ${this.caculatedRoute.done.toUpperCase()}.`
  }

  resetForm(): void {
    this.newSearch.emit(true);
  }
}
