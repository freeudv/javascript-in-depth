/**
 * TODO: Создайте простой объект `character`,
 * со свойствами `name: 'Benedict'` и `hp: 100`
 */

const character = {
  name: "Benedict",
  hp: 100
};

/**
 * TODO: Создайте простой объект `warrior`,
 * со свойством `weapon: 'Sword'`
 */

const warrior = {
  weapon: "Sword"
};

/**
 * TODO: Создайте простой объект `knight`,
 * со свойствами `mp: 100` и `spell: 'Holy Blast'`
 */

const knight = {
  ma: 100,
  spell: "Holy Blast"
};

/**
 * TODO: Сделайте объект `character` прототипом объекта `warrior`,
 * используя свойство `__proto__`
 */

warrior.__proto__ = character;

/**
 * TODO: Сделайте объект `warrior` прототипом объекта `knight`,
 * используя свойство `__proto__`
 */

knight.__proto__ = warrior;

module.exports = {
  character,
  warrior,
  knight
};
