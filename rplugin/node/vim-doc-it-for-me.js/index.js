'use strict';

plugin.commandSync('DocItForMe', function(nvim, reqCb) {
  // doc-it-for-me requires an es2015 enviornment set up since
  // it uses generators so it needs the regenerator runtime.
  require('babel-polyfill');
  var docItForMe = require('doc-it-for-me');

  nvim.getCurrentBuffer(function(err, buf) {
    buf.getLineSlice(0, -1, true, true, function(err, lines) {
      var result = docItForMe(lines.join('\n'))[0];
      buf.setLineSlice(0, -1, true, true, result.value.split('\n'));
      reqCb();
    });
  });
});
