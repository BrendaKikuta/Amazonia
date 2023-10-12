import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'AmazonIA'
    },
    // {
    //   path: 'fastest-route',
    //   component: FastestRouteComponent,
    //   title: 'Fastest Route'
    // }
  ];
  
  export default routeConfig;