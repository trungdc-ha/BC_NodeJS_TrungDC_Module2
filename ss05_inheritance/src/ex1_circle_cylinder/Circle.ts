class Circle {
    private _radius:number;
    private _color:string;

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    public getArea(){
        return Math.pow(this._radius, 2) * Math.PI;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
}

export default Circle;
