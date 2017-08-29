const set = {
  items: {},

  has(item) {
    return this.items.hasOwnProperty(item);
  },

  add(item) {
    if (!this.has(item)) this.items[item] = item;
    return this;
  },

  delete(item) {
    if (item in this.items) {
      delete this.items[item];
      return true;
    }

    return false;
  },

  size() {
    let size = 0;
    for (let item in this.items) {
      size += 1;
    }
    return size;

    // или так
    // return Object.keys(this.items).length;
  },

  clear() {
    this.items = {};
    return this;
  },

  keys() {
    let keys = [];
    for (let key in this.items) {
      keys.push(key);
    }
    return keys;
    // или return Object.keys(this.items);
  },

  values() {
    let keys = [];
    for (let key in this.items) {
      keys.push(this.items[key]);
    }
    return keys;
    // или return Object.values(this.items);
  },

  entries() {
    let keys = [];
    for (let key in this.items) {
      keys.push([key, this.items[key]]);
    }
    return keys;
    // или return Object.entries(this.items);
  },

  forEach(callback) {
    for (let key in this.items) {
      callback(this.items[key], key, this);
    }
  }
};

module.exports = () => set;
