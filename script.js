//array of numbers that shows how many rows of bit (circles) we have in each column
let rows = [2, 4, 3, 4, 3, 4];
let grid;

function setup() {
  //colorMode(HSB, 100, 100, 100, 1); // need for rainbow colors
  createCanvas(600, 600);
  
  //making a "grid" of circles representing each bit of each digit
  grid = new Array(6);  
  for (let i = 0; i < 6; i++) {
    grid[i] = new Array(rows[i]);
    
    for (let j = 0; j < rows[i]; j++) {
      grid[i][j] = 0;  
    }
  }
}

function draw() {
  background(51);
  let w = width/6;
  let time = getTime();
  
  //loop through all 6 digits of time string
  for (let i = 0; i < 6; i++) {
    //get ith digit
    let num = parseInt(time[i]);
    
    //get binary representation of ith digit
    let binary = num.toString(2);  
    
    // reverse binary string
    binary = binary.split("").reverse().join("");
    
    //set value of each   
    for (let j = 0; j < rows[i]; j++) {
      if (!binary[j]) {
        grid[i][j] = 0;  
      } else {  
        grid[i][j] = parseInt(binary[j]);    
      }  
    }
  }
  
  
  //draw binary clock
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < rows[i]; j++) {
      push();
      noStroke();
      
      //we need hue, alpha and bright for HSB color mode in case we want rainbow coloring
      let hue = map(i, 0, 5, 0, 80);
      let alpha;
      let bright;
      
      if (grid[i][j] == 0) {
        bright = 60;
        alpha = 0.6;
        fill(120, 0, 120);
      } else {
        alpha = 1;
        bright = 100;
         fill(255, 0, 255);
      }
      //x & y coordinates of current circle
      let x = w * (i + 0.5);
      let y = w * (6 - j - 1  + 0.5);
      //fill(hue, 100, bright, alpha);
      
      ellipse(x, y, w - 10, w - 10);
      pop();
    }
  }
  
  // draw time in decimal
  textSize(30);
  time = time[0] + time[1] + ":" + time[2] + time[3] + ":" + time[4] + time[5];
  fill(255, 0, 255);
  text(time, 450, 50);
}

//self-made function to get time string in hhmmss format
function getTime () {
  let h = (hour().toString().length == 2) ? hour().toString() : "0" + hour().toString();
  let m = (minute().toString().length == 2) ? minute().toString() : "0" + minute().toString();
  let s = (second().toString().length == 2) ? second().toString() : "0" + second().toString();
  
  let time = h + m + s;
  
  return time;
}
