// Auto-add tooltips to Lua keywords for kids
const keywordTooltips = {
  'local': "'local' creates a variable that only works in this script",
  'function': "'function' creates a block of code that runs when triggered",
  'if': "'if' checks if something is true",
  'then': "'then' comes after an if condition",
  'else': "'else' runs when the if condition is false",
  'elseif': "'elseif' checks another condition if the first was false",
  'end': "'end' closes a code block",
  'for': "'for' loops through a list of things",
  'in': "'in' is used with for loops",
  'do': "'do' starts the code block",
  'while': "'while' keeps repeating while something is true",
  'repeat': "'repeat' keeps running until something is true",
  'until': "'until' stops the repeat when the condition is true",
  'return': "'return' sends a value back from a function",
  'true': "'true' means yes/on",
  'false': "'false' means no/off",
  'and': "'and' means both conditions must be true",
  'or': "'or' means if not this, then use that instead",
  'not': "'not' means the opposite",
  'nil': "'nil' means nothing/empty",
  'local function': "'local function' creates a function only for this script"
};

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.code-quiz .keyword').forEach(el => {
    const text = el.textContent.trim();
    if (keywordTooltips[text] && !el.hasAttribute('data-tooltip')) {
      el.setAttribute('data-tooltip', keywordTooltips[text]);
    }
  });
});
