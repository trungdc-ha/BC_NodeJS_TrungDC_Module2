export class Node {
    private _name: string;
    private _point: number;
    private _next: Node | undefined;

    constructor(name: string, point: number, next?: Node) {
        this._name = name;
        this._point = point;
        this._next = next;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get point(): number {
        return this._point;
    }

    set point(value: number) {
        this._point = value;
    }

    get next(): Node {
        return <Node>this._next;
    }

    set next(value: Node) {
        this._next = value;
    }
}