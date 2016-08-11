import {provideRouter, Route} from '@angular/router';

 import {WelcomePageComponent} from './welcome-page/welcome-page.component';
 import {ClusterListComponent} from './cluster-list/cluster-list.component';
 import {ClusterComponent} from './cluster/cluster.component';
 import {HostListComponent} from './host-list/host-list.component';
 import {HostComponent} from './host/host.component';
// import {ComputerListComponent} from './computer-list/computer-list.component';
// import {ComputerDetailsComponent} from './computer-details/computer-details.component';

// import {UsageDatasComponent} from './usage-datas/usage-datas.component';

export const routes: Route[] = [
  { path: '',   component: WelcomePageComponent },
  { path: 'clusters', component: ClusterListComponent },
  { path: 'clusters/:clusterId', component: ClusterComponent },
  { path: 'clusters/:clusterId/hosts', component: HostListComponent },
  { path: 'clusters/:clusterId/hosts/:hostId', component: HostComponent }
  /*{ path: 'computers', component: ComputerListComponent },
  { path: 'computers/:computerId', component: ComputerDetailsComponent },

  { path: 'computers/:computerId/data', component: UsageDatasComponent }*/
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];