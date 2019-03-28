import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { RouteName } from '../models/routeName.model';

@Injectable({
  providedIn: 'root'
})
export class RouteDetectService {
  routeObj: RouteName[] = [
    { path: '/dashboard', name: 'Dashboard', icon: 'dashboard' },
    { path: '/post', name: 'Posts', icon: 'book' },
    { path: '/configuration', name: 'Configurations', icon: 'list_alt' },
    { path: '/projects', name: 'Projects', icon: 'apps' },
    { path: '/accounts', name: 'Accounts', icon: 'account_box' }
  ]
  
  public get routeProperty() : Object {
    return this.routeObj.find(route => route.path === this.routeName) || { name: '' };
  }

  public get routeName() : string {
    return this.router.url;
  }
  
  constructor(
    private router: Router,
  ) { }
}
