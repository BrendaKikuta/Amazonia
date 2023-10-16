import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; 

import { RoutesListComponent } from './routes-list/routes-list.component';
import { RouteFormComponent } from './route-form/route-form.component';

@Component({
  standalone: true,
  imports: [CommonModule, RoutesListComponent, RouteFormComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {}
