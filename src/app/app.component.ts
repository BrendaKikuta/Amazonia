import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteFormComponent } from './home/route-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: true,
  imports:[ NgbModule, RouteFormComponent, RouterModule ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AmazonIA';
}
