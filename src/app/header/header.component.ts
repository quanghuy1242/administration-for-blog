import { Component, OnInit } from '@angular/core';
import { RouteDetectService } from '../services/route-detect.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public routeDetect: RouteDetectService
  ) { }

  ngOnInit() {
  }

}
