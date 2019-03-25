import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouteDetectService } from '../services/route-detect.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {

  @ViewChild('drawer') drawer;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  ngAfterViewInit(): void {
    this.navigationService.drawer = this.drawer;
  }
  constructor(
  	private breakpointObserver: BreakpointObserver,
    public routeDetect: RouteDetectService,
    public navigationService: NavigationService
  ) {}

}
