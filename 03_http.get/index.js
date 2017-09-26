'use strict';

// const http = {
//   get(url, done) {
//     let request = new XMLHttpRequest();

//     request.onload = function() {
//       if (this.status === 200) {
//         try {
//           let data = JSON.parse(this.responseText);
//           done(null, data);
//         } catch (error) {
//           done(error);
//         }
//       } else {
//         done(new Error(this.statusText));
//       }
//     };

//     request.onerror = function(error) {
//       done(error);
//     };

//     request.open('GET', url);
//     request.send();
//   }
// };

const http = {
  get(url) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          try {
            let data = JSON.parse(this.responseText);
            resolve(data);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error(this.statusText));
        }
      };

      request.onerror = function(error) {
        reject(error);
      };

      request.open('GET', url);
      request.send();
    });
  }
};

module.exports = http;
