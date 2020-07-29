import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  landscape: boolean;
  wildlife: boolean;
  portrait: boolean;

  constructor() { }

  ngOnInit(): void {
    this.landscape = true;
    this.wildlife = false;
    this.portrait = false;
  }

  onWildlifeClick() {
    this.wildlife = true;
    this.landscape = false;
    this.portrait = false;
  }

  onLandscapeClick() {
    this.wildlife = false;
    this.landscape = true;
    this.portrait = false;
  }

  onPortraitClick() {
    this.wildlife = false;
    this.landscape = false;
    this.portrait = true;
  }

}
