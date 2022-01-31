function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120, 220, 800);
  
    
  // Halo Rays
  fill(245, 187, 87);
  stroke(245, 187, 87);
  push();
  translate(200, 50);
  rotate(radians(frameCount / 2));
  ellipse(0, 0, 60, 60);
  line(0, -60, 0, -40);
  line(0, 40, 0, 60);
  line(-45, -45, -30, -30);
  line(45, -45, 30, -30);
  line(-60, 0, -40, 0);
  line(40, 0, 60, 0);
  line(-45, 45, -30, 30);
  line(45, 45, 30, 30);
  pop();
  noFill();
 
  // Halo
  stroke(93, 173, 236);
  strokeWeight(20);
  fill(255,255,255,0);
  ellipse(200,70,190,60);
  
  stroke(5);
  arc(280,150, 25, 25, 45, PI / 5.0);
  arc(120,150, 25, 25, 45, PI / 5.0); // Ears
  
  fill(110,5,350); // Color of the circle which defines the head
  noStroke();// no outter line
  ellipse(200,150,150); // Position of the Circle/Head
  
  fill(250,243,235);//Color of the eyes 
  noStroke(); // no outter line
  ellipse(160,140,40);// Eyes 1 in the shape of a circle 
  ellipse(233,145,40);// Eyes 2 in the shape of a circle 
  
   //glasses
  fill(0,0,50)
  stroke("PINK")
  strokeWeight(6);
  line(160, 150, 220, 150);
  rect(130, 120, 55, 55, 10);
  rect(210, 120, 55, 55, 10);
  

  fill(20);// color of the inner eyes 1 and 2
  noStroke(); //no outter line
  ellipse(160,140,15, 20);//inner eyes 1
  ellipse(233,145,15, 10); // inner eyes 2
  
   //top
  push();
  translate(0,-100);
  fill("BROWN");
  noStroke();
  arc(200,290,40,20,PI,0);
  //arc(210,290,20,10,PI,0);
  
  //bottom
  fill("BROWN");
  noStroke();
  arc(200,290,40,20,0,PI);
  pop();
  
  
  point(85, 100);// a mole on the face in the shape of a circle
  stroke('black'); // outter color of the mole
  strokeWeight(5); // Circumference of the circle/mole
  point(220, 170); // Position of the circle/mole
    
  fill(0);
  quad(215,76,190,93,145,95,177,74);
  quad(185,90,170,110,120,110,149,95);
  quad(160,110,140,147,110,146,138,110);
  quad(218,76,224,80,245,87,216,87);
  quad(216,87,273,87,260,97,225,97);
  quad(225,97,253,97,250,115,243,115); //Hair
  
  
  fill(250,243,235);
  stroke(5);
  strokeWeight(30);
  line(165,290,85,250)
  line(170,350,300,250);//Hands
  
  
  noStroke()// no outter line
  fill("ORANGE") // color of the body
  rect(150, 220, 100, 150, 200, 25, 10, 5); //the body
  
  noFill();
  stroke(100);
  strokeWeight(8);
  circle(205,300,10);
  circle(205,250,10);
  circle(205,345,10); //Buttons on the shirt 
  
}