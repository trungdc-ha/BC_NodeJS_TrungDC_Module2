export class ClassRegex {
    private static CLASS_NAME_REGEX: RegExp = /^[\bCAP]\d{4}[\bGHIKLM]$/

    public static checkClassName(name: string) {
        return this.CLASS_NAME_REGEX.test(name);
    }
}

console.log(ClassRegex.checkClassName("C0318G"))
console.log(ClassRegex.checkClassName("M0318G"))
console.log(ClassRegex.checkClassName("P0323A"))
