import {Rectangle} from "./Rectangle";

export class Square extends Rectangle implements Colorable{
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    howToColor(): void {
        console.log("Color all four sides..")
    }
}
