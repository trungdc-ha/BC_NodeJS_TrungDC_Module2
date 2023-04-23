import Circle from "./Circle";
import Cylinder from "./Cylinder";

let circle:Circle = new Circle(5, 'red')
console.log(circle.getArea())

let cylinder:Cylinder = new Cylinder(5, 'black', 5);
console.log(cylinder.getVolume())
