import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; 
import { RouteFormComponent } from './route-form/route-form.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouteFormComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {}
