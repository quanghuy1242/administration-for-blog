import { Component, OnInit } from '@angular/core';
import { RouteDetectService } from '../services/route-detect.service';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.css']
})
export class PostCrudComponent implements OnInit {

  constructor(
  	private routeDetect: RouteDetectService
  ) {}

  ngOnInit() { }

}
