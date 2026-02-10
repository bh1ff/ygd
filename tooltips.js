// Auto-add tooltips to Lua keywords for kids
const luaKeywordTooltips = {
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

// Auto-add tooltips to Python keywords for kids
const pythonKeywordTooltips = {
  'def': "'def' creates a function (a reusable block of code)",
  'for': "'for' loops through a list of things",
  'in': "'in' is used with for loops to go through items",
  'range': "'range' creates a list of numbers to loop through",
  'if': "'if' checks if something is true",
  'else': "'else' runs when the if condition is false",
  'elif': "'elif' checks another condition if the first was false",
  'while': "'while' keeps repeating while something is true",
  'return': "'return' sends a value back from a function",
  'True': "'True' means yes/on",
  'False': "'False' means no/off",
  'and': "'and' means both conditions must be true",
  'or': "'or' means either condition can be true",
  'not': "'not' means the opposite",
  'None': "'None' means nothing/empty",
  'import': "'import' brings in extra code from a library",
  'from': "'from' specifies which library to import from",
  'len': "'len' counts how many items are in a list",
  'randint': "'randint' picks a random number between two values"
};

document.addEventListener('DOMContentLoaded', function() {
  // Keyword tooltips (Lua and Python)
  document.querySelectorAll('.code-quiz .keyword').forEach(el => {
    const text = el.textContent.trim();
    // Check Lua keywords first, then Python
    if (luaKeywordTooltips[text] && !el.hasAttribute('data-tooltip')) {
      el.setAttribute('data-tooltip', luaKeywordTooltips[text]);
    } else if (pythonKeywordTooltips[text] && !el.hasAttribute('data-tooltip')) {
      el.setAttribute('data-tooltip', pythonKeywordTooltips[text]);
    }
  });

  // Line explainer tooltips - only show on ? button hover
  document.querySelectorAll('.code-quiz .line[data-explain]').forEach(line => {
    const explainText = line.getAttribute('data-explain');

    // Create ? button
    const btn = document.createElement('button');
    btn.className = 'explain-btn';
    btn.textContent = '?';
    btn.type = 'button';

    // Create tooltip (appended to body for fixed positioning)
    const tooltip = document.createElement('div');
    tooltip.className = 'explain-tooltip';
    tooltip.textContent = explainText;
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);

    // Show tooltip on hover with fixed positioning
    btn.addEventListener('mouseenter', () => {
      // Show invisibly first to measure
      tooltip.style.visibility = 'hidden';
      tooltip.style.display = 'block';

      const rect = btn.getBoundingClientRect();
      const tooltipHeight = tooltip.offsetHeight;

      tooltip.style.left = rect.left + 'px';
      tooltip.style.top = (rect.top - tooltipHeight - 10) + 'px';
      tooltip.style.visibility = 'visible';
    });
    btn.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });

    // Insert button into line
    line.insertBefore(btn, line.firstChild);
  });
});
