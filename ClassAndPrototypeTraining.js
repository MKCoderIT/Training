"use strict"

/* Exercise (1): Battle of the Prototypes (Old Way) */

function Warrior(name , basePower = 2){
    this.name = name;
    this.basePower = basePower;
    console.log(`Warrior ${this.name} with Power ${this.basePower}`);
}

Warrior.prototype.attack = function(enemy) {
   if (enemy.basePower <= 0 || this.basePower <= 0) {
        if(enemy.basePower <= 0){
            console.log(`${enemy.name} is dead`);
        }
        if(this.basePower <= 0){
            console.log(`${this.name} is dead`);
        }
    }else{
        console.log(`Attacker : ` , this , `Attaced : ` ,enemy);
        let AttackResult = Math.ceil(Math.random() * 3);
            switch (AttackResult) {
                case 1:
                    enemy.basePower -= this.basePower
                    console.log(`Attack successful (entered health value : -${this.basePower})`);
                    if(enemy.basePower <= 0){
                        enemy.basePower = 0;
                        console.log(`Warrior ${enemy.name} is dead`);
                    }
                    if(this.basePower <= 0){
                        this.basePower = 0;
                        console.log(`Warrior ${this.name} is dead`);
                    }
                    console.log(`Warrior ${this.name} Power ${this.basePower}`);
                    console.log(`Warrior ${enemy.name} Power ${enemy.basePower}`);
                    break;
                case 2:
                    console.log(`The attack was defended.`);
                    break;
                case 3:
                    this.basePower -= enemy.basePower
                    console.log(`The attack was counterattacked (Health received value : -${enemy.basePower})`);
                    if(enemy.basePower <= 0){
                        enemy.basePower = 0;
                        console.log(`Warrior ${enemy.name} is dead`);
                    }
                    if(this.basePower <= 0){
                        this.basePower = 0;
                        console.log(`Warrior ${this.name} is dead`);
                    }
                    console.log(`Warrior ${this.name} Power ${this.basePower}`);
                    console.log(`Warrior ${enemy.name} Power ${enemy.basePower}`);
                    break;
                default:
                    break;
        }
    }
}
Warrior.prototype.train = function() {
    if (this.basePower <= 0) {
        console.log(`${this.name} is dead`);
    }else{
        let TrainingResult = Math.ceil(Math.random() * 3);
        switch (TrainingResult) {
            case 1:
                setTimeout(() => {
                    this.basePower += 1;
                    console.log(`${this.name} power (${this.basePower}) has been updated.`);
                }, 5000);
                console.log(`Training adds 1 power points to ${this.name} after 5 seconds (${this.basePower} + 1 = ${this.basePower + 1})`);
                break;
            case 2:
                setTimeout(() => {
                    this.basePower += 2;
                    console.log(`${this.name} power (${this.basePower}) has been updated.`);
                }, 5000);
                console.log(`Training adds 2 power points to ${this.name} after 5 seconds (${this.basePower} + 2 = ${this.basePower + 2})`);
                break;
            case 3:
                setTimeout(() => {
                this.basePower += 3;
                    console.log(`${this.name} power (${this.basePower}) has been updated.`);
                }, 5000);
                console.log(`Training adds 3 power points to ${this.name} after 5 seconds (${this.basePower} + 3 = ${this.basePower + 3})`);
                break;
            default:
                break;
        }
    }
}


const vilozaka = new Warrior("vilozaka");
const nozokami = new Warrior("nozokami");

nozokami.train();
setTimeout(() => {
nozokami.train();
},5000)
setTimeout(() => {
nozokami.attack(vilozaka);}
,11000)

