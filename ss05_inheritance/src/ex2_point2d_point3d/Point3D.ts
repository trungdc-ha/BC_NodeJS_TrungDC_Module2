import Point2D from "./Point2D";

class Point3D extends Point2D {
    private _z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    getXYZ() {
        return {
            ...super.getXY(),
            z: this._z
        }
    }

    setXYZ(x: number, y: number, z: number) {
        super.setXY(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }
}

export default Point3D
