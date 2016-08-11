import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {HostService} from '../services/Clusters/HostService';

import {ClusterViewModel, HostViewModel} from '../viewModels/ClusterViewModel';

import {IHosts} from '../dtos/Hosts';

@Component({
  moduleId: module.id,
  selector: 'app-host',
  templateUrl: 'host.component.html',
  styleUrls: ['host.component.css']
})
export class HostComponent implements OnInit {

  private _service: HostService;

  clusterId: number;
  hostId: number;

  host: IHosts;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(service: HostService, route: ActivatedRoute, router: Router) {
    this._service = service;
    this._route = route;
    this._router = router;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.hostId = params['hostId'];
      this.clusterId = params['clusterId'];

      this.retrieveHost();
    });
  }

  onNavigate(host: HostViewModel, cluster: ClusterViewModel): void {
    console.log(`Navigating to '${this.clusterId}'/hosts/'${this.hostId}'...`);

    this._router.navigateByUrl(`clusters/${cluster.clusterId}/hosts/${host.hostId}`);
  }

  private retrieveHost(): void {
    this._service.getItemById(this.hostId.toString()).subscribe(host => this.host = host);
  }

}
