import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Shape} from "./Shape";

let circle: Circle = new Circle("circle", 2);
let rectangle: Rectangle = new Rectangle(4, 2, "rectangle");
let square: Square = new Square("Square", 4);

let shape: Shape[] = [circle, rectangle, square];

circle.resize(50);
rectangle.resize(90);
square.resize(70);

for (let i = 0; i < shape.length; i++) {
    console.log(shape[i]);
}
