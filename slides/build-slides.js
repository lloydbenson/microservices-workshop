'use strict';

const Fs = require('fs');
const Path = require('path');


const readme = Fs.readFileSync(Path.join(__dirname, 'README.md')).toString();
const slides = readme.split('\n\n\n').map((slide) => {
  return `<section data-markdown><script type="text/template">${slide}
</script></section>`;
});

process.stdout.write(slides.join('\n'));
