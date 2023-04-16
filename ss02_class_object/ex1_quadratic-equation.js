class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getA() {
        return this.a;
    }

    getB() {
        return this.b;
    }

    getC() {
        return this.c;
    }

    getDiscriminant() {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }

    getRoot1() {
        return (-this.getB() + Math.sqrt(this.getDiscriminant())) / (2 * this.getA());
    }

    getRoot2() {
        return (-this.getB() - Math.sqrt(this.getDiscriminant())) / (2 * this.getA());
    }
}

function checkEquation(quadraticEquation) {
    const delta = quadraticEquation.getDiscriminant();
    if (delta >= 0) {
        if (delta === 0) {
            const x1 = quadraticEquation.getRoot1();
            console.log(`The equation has one root ${x1}`);
        } else {
            const x1 = quadraticEquation.getRoot1().toFixed(6);
            const x2 = quadraticEquation.getRoot2().toFixed(6);
            console.log(`The equation has two roots ${x1} and ${x2}`);
        }
    } else {
        console.log('The equation has no real roots');
    }
}

// let arrInput = prompt("Enter a, b, c");
let arrInput = [1.0, 3, 1]
let rs1 = new QuadraticEquation(arrInput[0], arrInput[1], arrInput[2]);
checkEquation(rs1);

console.log("-----------------------------------------------")

// arrInput = prompt("Enter a, b, c");
arrInput = [1, 2.0, 1]
let rs2 = new QuadraticEquation(arrInput[0], arrInput[1], arrInput[2]);
checkEquation(rs2);

console.log("-----------------------------------------------")

// arrInput = prompt("Enter a, b, c");
arrInput = [1, 2, 3]
let rs3 = new QuadraticEquation(arrInput[0], arrInput[1], arrInput[2]);
checkEquation(rs3);
