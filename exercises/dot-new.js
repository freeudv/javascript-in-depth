/**
 * TODO:
 * - Создать объект `Character`.
 * - У объекта определить метод `new`
 * - При вызове, `Character.new` должен возвращать новый объект,
 * прототипом которого является `Character`.
 */

const Character = {
  new() {
    return Object.create(this);
  }
};

module.exports = Character;
