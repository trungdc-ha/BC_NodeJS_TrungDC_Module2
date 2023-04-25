let phoneNumber: Array<string> = [
    '090123456789',
    '091123456789',
    '093123456789',
    '086123456789',
    '094123456789',
    '097123456789',
]

let mobi: string[] = [];
let viettel: string[] = [];
let vina: string[] = [];

for (let i = 0; i < phoneNumber.length; i++) {
    let prefix = phoneNumber[i].substring(0, 3);
    switch (prefix) {
        case "090":
        case "093": {
            mobi.push(phoneNumber[i])
            break;
        }
        case "086":
        case "097":{
            viettel.push(phoneNumber[i])
            break;
        }
        case "091":
        case "094": {
            vina.push(phoneNumber[i])
            break;
        }
    }
}

console.log("Mobile", mobi)
console.log("Viettel", viettel)
console.log("Vina", vina)
