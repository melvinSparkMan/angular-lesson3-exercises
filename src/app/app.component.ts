import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle Taking Off.';
    }
 }

 handleLanding(rocketImage) {
  let result = window.confirm('Are you sure the shuttle is ready for Landing?');
  if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     rocketImage.style.bottom = 0 + 'px';
     rocketImage.style.left = 0 + 'px';
     this.takeOffEnabled = true;
     this.message = 'Shuttle now Landing.';

  }
}

handleAbort(rocketImage) {
  let result = window.confirm('Are you sure you want to Abort?');
  if (result) {
     this.color = 'red';
     this.height = 0;
     this.width = 0;
     rocketImage.style.bottom = 0 + 'px';
     rocketImage.style.left = 0 + 'px';
     this.message = 'Shuttle being Aborted.';
  }
}

moveRocket(rocketImage, direction) {
  if (direction === 'up') {
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height + 10000;
  }
  else if (direction === 'right') {
     let movement = parseInt(rocketImage.style.left) + 10 + 'px';
     rocketImage.style.left = movement;
     this.width = this.width + 10000;
  }
  else if (direction === 'left') {
    let movement = parseInt(rocketImage.style.left)  -10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000;
 }
else {
  let movement = parseInt(rocketImage.style.bottom)  -10 + 'px';
  rocketImage.style.bottom = movement;
  this.height = this.height - 10000;
}
}

}


