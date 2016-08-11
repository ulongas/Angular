import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {UsageDataServiceFactory, IUsageDataServiceFactory} from '../services/ComputerDetails/UsageDataServiceFactory';

import {IUsageData} from '../dtos/UsageData';

@Component({
  moduleId: module.id,
  selector: 'app-usage-datas',
  templateUrl: 'usage-datas.component.html',
  styleUrls: ['usage-datas.component.css']
})
export class UsageDatasComponent implements OnInit {

  private _factory: IUsageDataServiceFactory;

  computerId: string;

  usageData$: Observable<IUsageData[]>;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(/*service: ComputerDetailsService, */factory: UsageDataServiceFactory, route: ActivatedRoute, router: Router) {
    //this._service = service;
    this._factory = factory;
    this._route = route;
    this._router = router;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.computerId = params['computerId'];

      this.retrieveUsageData();
    });
  }

  private retrieveUsageData(): void {
      let service = this._factory.create(this.computerId);

      this.usageData$ = service.getAllItems();
  }

}
