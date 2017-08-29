"use strict";

function Character(name) {
  this.name = name;
  this.hp = 100;
}

let richard = new Character("richard");
let robert = new Character("robert");

robert.hp -= 25;

Character.prototype.inventory = [];

richard.inventory.push("Sword");

module.exports = {
  Character,
  richard,
  robert
};
