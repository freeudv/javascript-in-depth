'use strict';

function wait(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

wait(1000).then(() => console.log('Done'));

module.exports = wait;
