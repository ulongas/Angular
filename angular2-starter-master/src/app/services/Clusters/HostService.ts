import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from '../ReadOnlyService';

import {IHosts} from '../../dtos/Hosts';

@Injectable()
export class HostService 
    extends ReadOnlyServiceBase<IHosts> {

    constructor(http: Http) {
        super(http, "http://192.168.10.106/api/hosts/");
        
    }
}