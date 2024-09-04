var time = 0
var osc

function setup() {
  createCanvas(400, 400)
  background(0)
  noStroke()

  osc = new p5.Oscillator('Triangle')
  osc.start()
}

function draw() {
  // fade the background by giving it a low opacity
  background(150, 200)

  var x = width * noise(time)
  var y = height * noise(time + 50)
  var r = 255 * noise(time + 30)
  var g = 255 * noise(time + 50)
  var b = 255 * noise(time + 15)
  var radius = 20 + 100 * noise(time + 100)
  var freq = 1100 - 1050 * noise(time + 5)
  var vol = noise(time)
  
  fill(r, g, b)
  
  // adjusted from the reading "Procedural Shapes"
  // creates random shapes each iteration of the for loop
  translate(width/2, height/2);
  beginShape();
  for(let i = 0; i < 200; i++) {
  const x = random(-200, 200);
  const y = random(-200, 200);
  const z = random(-150, 150);
  const w = random(-150, 150);
  const m = random(-100, 100);
  const n = random(-100, 100);
  vertex(x, y);
    
  // adjusted from the reading "Custom Shapes"
  quadraticVertex(x, y, z, w);
    bezierVertex(w, z, y, x, m, n);
    
}
endShape();
  
  osc.freq(freq)
  osc.amp(vol)

  time = time + 0.01
}

