import Circle from "./Circle";

class Cylinder extends Circle{
    private _height:number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }

    getVolume(){
        return super.getArea()*this._height;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }
}

export default Cylinder
