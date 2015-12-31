plugin.commandSync('DocItForMe', (nvim, reqCb) => {
  require('babel-polyfill');
  const docItForMe = require('doc-it-for-me').default;

  nvim.getCurrentBuffer((err, buf) => {
    buf.getLineSlice(0, -1, true, true, (err, lines) => {
      var result = docItForMe(lines.join('\n'))[0];
      buf.setLineSlice(0, -1, true, true, result.value.split('\n'));
      reqCb();
    });
  });
});
