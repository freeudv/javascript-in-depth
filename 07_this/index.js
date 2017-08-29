"use strict";

function Character() {
  if (!(this instanceof Character)) {
    return global;
  }
}

// или просто
// function Character() {
//   return this;
// }

function Warrior() {
  return {};
}

module.exports = {
  Character,
  Warrior
};
