import { Component, OnInit } from '@angular/core';
import { RouteDetectService } from '../services/route-detect.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public routeDetect: RouteDetectService,
    public navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

}
