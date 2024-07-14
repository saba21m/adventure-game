import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please enter your name: "
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your opponent:",
        choices: ["skeleton", "alien", "zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack", "Drink Portion", "Run Fot Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name}Fuel is ${p1.fuel}`);
                console.log(`${o1.name}Fuel is ${o1.fuel}`);
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name}Fuel is ${p1.fuel}`);
                console.log(`${o1.name}Fuel is ${o1.fuel}`);
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion, Your Fuel Is ${p1.fuel}`);
        }
        if (ask.opt = "Run Fot Your Life..") {
            console.log("You Loose, Better Luck Next Time...");
        }
    }
} while (true);
