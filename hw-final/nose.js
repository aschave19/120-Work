function Nose() {
//Applying the object's starting point, which I'd like to be on the left side of the canvas, but not off-screen.
  this.y = height/2;
  this.x = 90;

//Adding variables to cause the nose to fall if not being controlled.
  this.gravity = .5;
  this.velocity = 0;
  this.lift = -10;

//This function is where the drawing of the ball/nose will take place.
  this.show = function() {
//Drawing of the nose. It's a clown nose, so it obviously has to be round and red.
    strokeWeight(5);
    stroke('rgb(193, 23, 23)');
    fill('rgb(255, 0, 0)');
    ellipse(this.x, this.y, 65, 65);
  }

//Function causing nose to move upward
  this.up = function() {
    this.velocity += this.lift;
  }

//Function to cause nose to fall
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

//Function to stop ball from falling out of frame
    //if (this.y > height) {
      //this.y = height;
      //this.velocity = 0;
    //}

//Function to stop ball bouncing out of frame upward
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
}

}
