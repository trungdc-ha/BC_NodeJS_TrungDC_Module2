function calculator(number1: number, number2: number, operator: string) {
    let result;
    try {
        if (operator == '+') {
            result = number1 + number2;
        } else if (operator == '-') {
            result = number1 - number2;
        } else if (operator == '*') {
            result = number1 * number2;
        } else if (operator == '/') {
            result = number1 / number2;
        } else {
            throw new RangeError("The operator must be an +,-,*,/");
        }
    } catch (error) {
        if (error instanceof RangeError) {
            return error.message;
        }
    }
    return result;
}

console.log(calculator(3, 9, '%'));
