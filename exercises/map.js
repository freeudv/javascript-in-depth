let map = {
  store: {},

  has(key) {
    return key in this.store;
  },

  get(key) {
    return this.store[key];
  },

  set(key, value) {
    this.store[key] = value;
    return this;
  },

  delete(key) {
    return delete this.store[key];
  },

  clear() {
    this.store = {};
    return this;
  },

  size() {
    let size = 0;
    for (let key in this.store) {
      size +=1;
    }
    return size;
  },

  keys() {
    let keys =[];
    for (let key in this.store) {
      keys.push(key);
    }
    return keys;
  },

  values() {
    let values =[];
    for (let key in this.store) {
      values.push(this.store[key]);
    }
    return values;
  },

  entries() {
    let entries = [];
    for (let key in this.store) {
      entries.push({key: key, value: this.store[key]});
    }
    return entries;
  },

  forEach(callback) {
    for (let key in this.store) {
      let value = this.store[key];
      callback(value, key, this);
    }
  }
};
