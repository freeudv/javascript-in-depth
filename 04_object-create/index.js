"use strict";

const character = Object.create(Object.prototype, {
  name: { value: "Benedict" },
  hp: { value: "100" }
});

const warrior = Object.create(character, {
  weapon: { value: "Sword" }
});

const knight = Object.create(warrior, {
  mp: { value: "100" }
});

module.exports = {
  character,
  warrior,
  knight
};
