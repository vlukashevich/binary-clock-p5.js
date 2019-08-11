let cols = [2, 4, 3, 4, 3, 4];
let len;

let bright;
let dark;
let index = 2;

let w;
let side_margin = 50;
let grid_margin = 5;

function get_time () {
  let sec = second();
  let s = (sec > 9) ? sec.toString() : "0" + sec.toString();
  
  let min = minute();
  let m = (min > 9) ? min.toString() : "0" + min.toString();
  
  let hr = hour();
  let h = (hr > 9) ? hr.toString() : "0" + hr.toString();
  
  return h + m + s;
}

function setup() {
  createCanvas(600, 600);
  
  bright = [color(0, 255, 50), color(0, 255, 255), color(255, 0, 255)];
  dark = [color(0, 124, 50), color(0, 120, 120), color(120, 0, 120)];
  
  len = cols.length;
  w = (width - 2 * side_margin) / len;
}


function draw() {
  background(51);
  let time = get_time();
  
  noStroke();
  
  for (var i = 0; i < len; i++) {
    let x = side_margin + w * (i + 0.5);
    
    let bin = parseInt(time[i]).toString(2);
    bin = bin.split("").reverse().join("");
    
    for (var j = 0; j < cols[i]; j++) {
      let y = height - (side_margin + w * (j + 0.5));
      
      let d = w - 2 * grid_margin;
      
      if (bin.charAt(j) == '1') {
        fill(bright[index]);  
      } else {
        fill(dark[index]);  
      }
      
      circle(x, y, d/2);
    }
  }
}
