// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var objType = typeof obj;

  //catchall
  if (obj === null) {
    return 'null';
  }

  if (objType === undefined) {
    return;
  }

  //strings
  if (objType === 'string') {
    return '"' + obj + '"';
  }

  //numbers & booleans
  if (objType === 'number' || objType === 'boolean') {
    return obj.toString();
  }

  //arrays
  if (Array.isArray(obj)) {
    var stringedArray = [];
    for (var i = 0; i < obj.length; i++) {
      stringedArray.push(stringifyJSON(obj[i]));
    }
    return '[' + stringedArray + ']';
  }

  //objects
  if (typeof obj === 'object') {

    var keys = Object.keys(obj);
    var stringifiedObject = '{';
    var counter = 0;

    for (var key in obj) {
      if (stringifyJSON(obj[key])) {
        stringifiedObject = stringifiedObject + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + (counter < keys.length - 1 ? ',' : '');
        counter++;
      }
    }

    return stringifiedObject + '}';
  }


};
