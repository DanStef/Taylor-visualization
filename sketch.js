
my_width = 2000
my_height = 1000
my_x = -5
scara_x = 100
scara_y = 100
function f(x) {
	return sin(x)
}

function taylor4(x) {
	return x - x*x*x/6 + x*x*x*x*x/120 + x*x*x*x*x*x*x/5040
}

function taylor3(x) {
	return x - x*x*x/6 + x*x*x*x*x/120
}

function taylor2(x) {
	return x - x*x*x/6
}

function taylor1(x) {
	return x
}

function e(x) {
	return exp(x)
}

function e1(x) {
	return 1 + x
}

function e2(x) {
	return 1 + x + x*x/2
}

function e3(x) {
	return 1 + x + x*x/2 + x*x*x/6
}

function e4(x) {
	return 1 + x + x*x/2 + x*x*x/6 + x*x*x*x/24
}

function e5(x) {
	return 1 + x + x*x/2 + x*x*x/6 + x*x*x*x/24 + x*x*x*x*x/120
}

function fact(x) {
	if(x == 1) {
		return 1
	}

	return x * fact(x-1)
}

function e6(x) {
	return e5(x) + pow(x, 6)/fact(6)
}

function e7(x) {
	return e6(x) + pow(x, 7)/fact(7)
}

function setup() {
	createCanvas(my_width, my_height);
	background(40);

	stroke(230)
	strokeWeight(4);
  	line(my_width/2, 0, my_width/2, my_height);
  	line(0, my_height/2, my_width, my_height/2);
}

function draw() {
  if(my_x > 20) {
  	return
  }

  result = e(my_x)
  y = my_height/2 -result*scara_y
  x = my_x * scara_x + my_width/2
  // console.log(scara)
  // variabila = y - (my_height/scara)
  // console.log(x + " " + variabila)

  // y_taylor1 = taylor1(my_x)
  // y_taylor1 = my_height/2 - y_taylor1*scara_y
  // x_taylor1 = my_x * scara_x + my_width/2

  // y_taylor2 = taylor2(my_x)
  // y_taylor2 = my_height/2 - y_taylor2*scara_y
  // x_taylor2 = my_x * scara_x + my_width/2

  // y_taylor3 = taylor3(my_x)
  // y_taylor3 = my_height/2 - y_taylor3*scara_y
  // x_taylor3 = my_x * scara_x + my_width/2

  // y_taylor4 = taylor3(my_x)
  // y_taylor4 = my_height/2 - y_taylor4*scara_y
  // x_taylor4 = my_x * scara_x + my_width/2


  y_taylor1 = e7(my_x)
  y_taylor1 = my_height/2 - y_taylor1*scara_y
  x_taylor1 = my_x * scara_x + my_width/2

  strokeWeight(8);

  stroke(255, 0, 0)
  point(x, y)

  stroke(0, 255, 0)
  point(x_taylor1, y_taylor1)


  console.log(e7(2))
  // stroke(0, 0 , 255)
  // point(x_taylor2, y_taylor2)

  // stroke(0, 255, 255)
  // point(x_taylor3, y_taylor3)

  // stroke(255, 0, 255)
  // point(x_taylor4, y_taylor4)

  my_x+=0.02


}

function mouseClicked() {
	

}

function mousePressed(event) {
	
}