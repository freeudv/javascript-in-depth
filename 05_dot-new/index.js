"use strict";

const Character = {
  new() {
    return Object.create(this);
  }
};

// или

// const Character = {
//   new() {
//     let obj = {};
//     obj.__proto__ = this;
//     return obj;
//   }
// };

module.exports = Character;
