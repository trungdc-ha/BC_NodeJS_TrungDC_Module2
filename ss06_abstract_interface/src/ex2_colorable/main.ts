import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Shape} from "./Shape";
import {Cylinder} from "./Cylinder";


let circle: Circle = new Circle("circle", 2);
let cylinder: Cylinder = new Cylinder("cylinder", 4, 5);
let rectangle: Rectangle = new Rectangle(4, 2, "rectangle");
let square: Square = new Square("Square", 4);

let shape: Shape[] = [circle, cylinder, rectangle, square];

shape.forEach((value) => {
    if (value instanceof Square) {
        console.log(value)
        value.howToColor()
    }
})
