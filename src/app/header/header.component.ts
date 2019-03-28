import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouteDetectService } from '../services/route-detect.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('title') title: ElementRef;

  constructor(
    public routeDetect: RouteDetectService,
    public navigationService: NavigationService
  ) { }

  ngAfterViewInit() {

  }

  setTitle(str: string): void {
    this.title.nativeElement.innerText = str;
  }

}
