'use strict';

// function parseJSON(json, done) {
//   try {
//     let data = JSON.parse(json);
//     done(null, data);
//   } catch (error) {
//     done(error);
//   }
// }

function parseJSON(json) {
  return new Promise((resolve, reject) => {
    try {
      let data = JSON.parse(json);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

parseJSON('{"JSON": "JavaScript Object Notation"}').then(data =>
  console.log(data)
);

module.exports = parseJSON;
