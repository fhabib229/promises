/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */


var Promise = require('bluebird');
var fs = (require('fs'));
var promisification = require('./promisification.js');
var promiseConstructor = require('./promiseConstructor.js');




var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  /*
    return promiseConstrucotr.pluckFirstLineFromFileAsync(readFilePath).then((err, username) => {
      if (err) {
        throw new Error('User not found!')
      } else {
        return username
      }
    }).then((user) => {
      return promisification.getGitHubProfile(user)
    }).then((writeFilePath) => {
      return writer(user, writeFilePath);

    var writer = function(user, writeFilePath) {
      fs.writeFile(err, writeFilePath);
    }
  */
  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath).then((username) => {
    if (!username) {
      throw new Error('Username not found!');
    } else {
      return promisification.getGitHubProfileAsync(username);
    }
  }).then((response) => {
    return fs.writeFileSync(writeFilePath, JSON.stringify(response));
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
