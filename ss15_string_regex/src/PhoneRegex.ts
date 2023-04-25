export class PhoneRegex {
    private static PHONE_REGEX: RegExp = /^\(84\)-\([0-9]{10}\)$/

    public static checkPhoneNumber(phoneNumber: string) {
        return this.PHONE_REGEX.test(phoneNumber);
    }
}

console.log(PhoneRegex.checkPhoneNumber("(84)-(0978489648)"));
console.log(PhoneRegex.checkPhoneNumber("(a8)-(22222222)"));
