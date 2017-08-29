"use strict";

const character = {
  name: "Benedict",
  hp: 100
};

const warrior = { weapon: "Sword" };

const knight = {
  mp: 100,
  spell: "Holy Blast"
};

warrior.__proto__ = character;
knight.__proto__ = warrior;

module.exports = {
  character,
  warrior,
  knight
};
