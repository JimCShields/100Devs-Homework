class Account{
    constructor(name){
        this.name = name;
        this.balance = 0;
    }

    credit(amount){
        this.balance += amount;
    }

    describe(){
        return `Owner: ${this.name}, Balance: ${this.balance}`
    }
}

const Sean = new Account('Sean');
const Brad = new Account('Brad');
const Georges = new Account('Georges');

const acctArray = [Sean, Brad, Georges]

Sean.credit(1000)
Brad.credit(1000)
Georges.credit(1000)

console.log(Sean.describe())
console.log(Brad.describe())
console.log(Georges.describe())