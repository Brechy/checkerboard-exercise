var s = "<div style=\"width: 0; clear: left;\"></div>"
var b = "<div style=\"background-color: black; float: left; width: 11.1%; padding-bottom: 11.1%\"></div>"
var r = "<div style=\"background-color: red; float: left; width: 11.1%; padding-bottom: 11.1%\"></div>"
var rline = s + (b + r).repeat(4) + '\n';
var bline = s + (r + b).repeat(4) + '\n';
var board = (rline + bline).repeat(4);

document.write(board);
