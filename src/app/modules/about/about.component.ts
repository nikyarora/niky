import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  intro = "Hello! I am an undergraduate at the University of California, Berkeley studying Electrical \
          Engineering and Computer Science (EECS) and Business Administration. I'm interested in Machine Learning, \
          Deep Neural Networks, Full-Stack Web Development, and Mobile Development."
  interests = "I am a passionate follower of Bay Area sports teams (SF Giants, GS Warriors, SF 49ers). \
              In my free time I love to cook and bake, play the guitar and ukulele, \
              take and edit photos, and beat my family at Settlers of Catan."

  constructor() { }

  ngOnInit(): void {
  }

}
