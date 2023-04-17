class User {
    protected _name: string;
    protected _email: string;
    public _role: number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    getInfo(): string {
        return `name: ${this._name} - email: ${this._email} - role: ${this._role}`
    }

    isAdmin(): void {
        if(this._role === 1){
            console.log('is admin');
        } else {
            console.log('is user')
        }
    }

    set name(value: string) {
        this._name = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set role(value: number) {
        this._role = value;
    }
}

let user1: User = new User('Hung', 'abc@gmail.com', 1);
console.log(user1.getInfo())
user1.isAdmin()
