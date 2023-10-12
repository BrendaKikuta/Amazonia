import { Routes } from '@angular/router';
import { RouteFormComponent } from './home/route-form.component';

const routeConfig: Routes = [
    {
      path: '',
      component: RouteFormComponent,
      title: 'AmazonIA'
    },
    // {
    //   path: 'fastest-route',
    //   component: FastestRouteComponent,
    //   title: 'Fastest Route'
    // }
  ];
  
  export default routeConfig;