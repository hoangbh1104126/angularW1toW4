import { Component, OnInit } from '@angular/core';
let road = 0;
@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styles: [''],
})
export class RoadComponent implements OnInit {
  road = road++;
  constructor() {}

  ngOnInit() {}
}
