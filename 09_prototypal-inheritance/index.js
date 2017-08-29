"use strict";

// 1. Создать функцию `Character`, которая создает объект со свойствами `name: string` и `hp: number = 100`.

function Character(name) {
  this.name = name;
  this.hp = 100;
}

// 2. Прототипу `Character` добавить метод `greet`, который будет возвращать строку приветствия 'Приветствую!'

Character.prototype.greet = () => "Приветствую!";

// 3. Создать функцию `Warrior`, которая создает объект со свойствами `name: string`, `hp: number = 100`, `weapon: string` и `stamina: number = 100`.
// Для инициализации свойств `name` и `hp` воспользуйтесь функцией `Character`.

// 4. Связать прототип `Warrior` с прототипом `Character`.
// Конструктором прототипа `Warrior` сделать функцию `Warrior`.

function Warrior(name, weapon) {
  Character.call(this, name);
  this.weapon = weapon;
  this.stamina = 100;
}

Warrior.prototype = Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior;

// 5. Прототипу `Warrior` добавить метод `attack`, который:
// * принимает в качестве аргумента персонажа,
// * снимает ему здоровье (случайное число от 1 до 10),
// * отнимает 10 едениц стамины,
// * возвращает нанесенный урон

Warrior.prototype.attack = function(person) {
  let damage = Math.floor(Math.random() * 10) + 1;
  person.hp -= damage;
  this.stamina -= 10;
  return damage;
};

//или так
// class Warrior extends Character {
//   constructor(name, weapon) {
//     super(name);

//     this.weapon = weapon;
//     this.stamina = 100;
//   }

//   attack(person) {
//     let damage = Math.floor(Math.random() * 10) + 1;
//     person.hp -= damage;
//     this.stamina -= 10;
//     return damage;
//   }
// }

// 6. Создать функцию `Knight`, которая создает объект со свойствами `name: string`, `hp: number = 100`, `weapon: string`, `stamina: number = 100` и `mp: number = 100`.
// Для инициализации свойств `name`, `hp`, `weapon` и `stamina`, поспользуйтесь функцией `Warrior`.

// 7. Связать прототип `Knight` с прототипом `Warrior`.
// Конструктором прототипа `Knight` сделать функцию `Knight`.

function Knight(name, weapon) {
  Warrior.call(this, name, weapon);
  this.mp = 100;
}

Knight.prototype = Object.create(Warrior.prototype);
Knight.prototype.constructor = Knight;

// 8.  Прототипу `Knight` добавить метод `heal`, который:
// * принимает в качестве аргумента персонажа,
// * восстанавливает ему здоровье (случайное число от 1 до 10),
// * отнимает 10 едениц маны,
// * возвращает нанесенный урон

Knight.prototype.heal = function(person) {
  let recovery = Math.floor(Math.random() * 10) + 1;
  person.hp += recovery;
  this.mp -= 10;
  return recovery;
};

//или так
// class Knight extends Warrior {
//   constructor(name, weapon) {
//     super(name, weapon);
//     this.mp = 100;
//   }

//   heal(person) {
//     let recovery = Math.floor(Math.random() * 10) + 1;
//     person.hp += recovery;
//     this.mp -= 10;
//     return recovery;
//   }
// }

module.exports = {
  Character,
  Warrior,
  Knight
};
