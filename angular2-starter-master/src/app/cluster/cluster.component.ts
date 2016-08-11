import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {ClusterService} from '../services/Clusters/ClusterService';

import {ClusterViewModel} from '../viewModels/ClusterViewModel';

import {IClusters} from '../dtos/Clusters';

@Component({
  moduleId: module.id,
  selector: 'app-cluster',
  templateUrl: 'cluster.component.html',
  styleUrls: ['cluster.component.css']
})
export class ClusterComponent implements OnInit {

private _service: ClusterService;

clusterId: number;

  cluster: IClusters;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(service: ClusterService, route: ActivatedRoute, router: Router) {
    this._service = service;
    this._route = route;
    this._router = router;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clusterId = params['clusterId'];

      this.retrieveCluster();
    });
  }

  onNavigate(cluster: ClusterViewModel): void {
    console.log(`Navigating to '${this.clusterId}'/hosts...`);

    this._router.navigateByUrl(`clusters/${this.clusterId}/hosts`);
  }

  private retrieveCluster(): void {
    this._service.getItemById(this.clusterId.toString()).subscribe(cluster => this.cluster = cluster);
  }

}
