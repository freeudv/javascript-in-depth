"use strict";

function Character(name) {
  this.name = name;
  this.hp = 100;
}

// или так
// class Character {
//   constructor(name, hp = 100) {
//     this.name = name;
//     this.hp = hp;
//   }
// }

const character = new Character("Benedict");

module.exports = {
  Character,
  character
};
