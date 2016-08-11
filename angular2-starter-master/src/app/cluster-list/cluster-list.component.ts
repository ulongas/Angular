import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {ClusterService} from '../services/Clusters/ClusterService';

import {ClusterViewModel} from '../viewModels/ClusterViewModel';

import {IClusters} from '../dtos/Clusters';

@Component({
  moduleId: module.id,
  selector: 'app-cluster-list',
  templateUrl: 'cluster-list.component.html',
  styleUrls: ['cluster-list.component.css']
})
export class ClusterListComponent implements OnInit {

  private _service: ClusterService;
  private _router: Router;

  clusters$: Observable<IClusters[]>;

  constructor(service:ClusterService, router: Router) {
    this._service = service;
    this._router = router;
    this.clusters$ = service.getAllItems();
   }

  ngOnInit() {
  }

  onNavigate(cluster: ClusterViewModel): void {
    console.log(`Navigating to '${cluster.clusterId}'...`);

    this._router.navigateByUrl(`clusters/${cluster.clusterId}`);
  }

}
