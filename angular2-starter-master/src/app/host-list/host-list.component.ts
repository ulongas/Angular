import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {HostService} from '../services/Clusters/HostService';

import {ClusterViewModel, HostViewModel} from '../viewModels/ClusterViewModel';

import {IHosts} from '../dtos/Hosts';

@Component({
  moduleId: module.id,
  selector: 'app-host-list',
  templateUrl: 'host-list.component.html',
  styleUrls: ['host-list.component.css']
})
export class HostListComponent implements OnInit {

  private _serviceHost: HostService;
  private _router: Router;

  private _route: ActivatedRoute;

  clusterId: number;


  hosts$: Observable<IHosts[]>;

  constructor(service:HostService, route: ActivatedRoute, router: Router) {
    this._serviceHost = service;
    this._router = router;
    this._route = route;
    this.hosts$ = service.getAllItems();
  }
   

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clusterId = params['clusterId'];
    });
    
  }

  onNavigate(host: HostViewModel, cluster: ClusterViewModel): void {
    //console.log(`Navigating to '${host.clusterId}'/hosts/'${host.name}'...`);
    

    this._router.navigateByUrl(`clusters/${this.clusterId}/hosts/${host.hostId}`);
  }

}
