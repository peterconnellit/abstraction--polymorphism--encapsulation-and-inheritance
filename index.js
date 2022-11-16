class Shape {
    constructor(colour, xAxis, yAxis) {
        this.colour = colour
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }

    set xAxis(x) {
        this.x = x;
    }

    set yAxis(y) {
        this.y = y;
    }

    information() {
      console.log(
        "It has an area of " + this.area + ". " + "The colour is " + this.colour + ". The x axis is " + this.x + ". The y axis is " + this.y);
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height, colour, xAxis, yAxis ) {
      super(colour, xAxis, yAxis);
      this.width = width;
      this.height = height;
      this.width = width;
    }

    get area() {
      return this.width * this.height;
    }

    information() {
      console.log(
        "This shape is " + this.width + " wide and " + this.height + " high. "
      );
      super.information();
    }
  }
  
  class Circle extends Shape {
    constructor(radius, colour, xAxis, yAxis) {
      super(colour, xAxis, yAxis);
      this.radius = radius;
    }
  
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    information() {
      console.log("This shape has a radius of " + this.radius + ". ");
      super.information();
    }
  }
  
  const rectangle = new Rectangle(20, 20, "blue", 10, 5);
  rectangle.information();
  const circle = new Circle(4, "red", 6, 8);
  circle.information();