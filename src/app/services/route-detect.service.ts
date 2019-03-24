import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouteDetectService {
  
  routeObj = [
    { path: '/dashboard', name: 'Dashboard', icon: 'dashboard' },
    { path: '/post', name: 'Posts', icon: 'book' },
    { path: '/configuration', name: 'Configuration', icon: 'settings' },
    { path: '/accounts', name: 'Accounts', icon: 'account_box' }
  ]
  
  public get routeProperty() : Object {
    return this.routeObj.find(route => route.path === this.routeName);
  }

  public get routeName() : string {
    return this.router.url;
  }
  
  constructor(
    private router: Router,
  ) { }
}
