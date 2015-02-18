/* */ 
exports = module.exports = require("./debug");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
var storage;
if (typeof chrome !== 'undefined' && typeof chrome.storage !== 'undefined')
  storage = chrome.storage.local;
else
  storage = window.localStorage;
exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
function useColors() {
  return ('WebkitAppearance' in document.documentElement.style) || (window.console && (console.firebug || (console.exception && console.table))) || (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}
exports.formatters.j = function(v) {
  return JSON.stringify(v);
};
function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors)
    return args;
  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%%' === match)
      return ;
    index++;
    if ('%c' === match) {
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
  return args;
}
function log() {
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
function save(namespaces) {
  try {
    if (null == namespaces) {
      storage.removeItem('debug');
    } else {
      storage.debug = namespaces;
    }
  } catch (e) {}
}
function load() {
  var r;
  try {
    r = storage.debug;
  } catch (e) {}
  return r;
}
exports.enable(load());
