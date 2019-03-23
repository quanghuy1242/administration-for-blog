import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RouteDetectService } from '../services/route-detect.service';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.css']
})
export class PostCrudComponent implements OnInit {

  constructor(
  	private router: Router,
  	private routeDetect: RouteDetectService
  ) {}

  ngOnInit() {
  	this.routeDetect.routeName = this.router.url.slice(1);
  }

}
