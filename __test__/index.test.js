var index = require('../index.js');
test('/lhui\.min\.css/', () => {
  expect(index.getFilePath('lhui.min.css'));
});
