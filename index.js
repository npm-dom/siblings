var matches = require('matches-selector')

module.exports = function(el, sel) {
  var siblings = []
  var siblings = el.parentNode.childNodes
  if (!sel) return siblings
  for (var i = 0; i < siblings.length; i++) {
    var sibling = siblings[i]
    if (matches(sibling, selector)) siblings.push(sibling)
  }
  return siblings
}
