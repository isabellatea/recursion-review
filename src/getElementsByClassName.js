// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//Solution #1
var getElementsByClassName = function(className) {
  var results = [];
  var allElements = document.body;

  var checkForMatches = function(node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }
    for (var i = 0; i < node.childNodes.length; i++) {
      checkForMatches (node.childNodes[i]);
    }
  };

  checkForMatches (allElements);
  return results;
};


//Solution #2
var getElementsByClassName = function(className) {
  var results = [];
  var allElements = document.body;

  var checkForMatches = function(node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }
  };

  var traverse = function(node, callback) {
    callback(node);
    node = node.firstChild;
    while (node) {
      traverse (node, callback);
      node = node.nextSibling;
    }
  };

  traverse (allElements, checkForMatches);
  return results;

};