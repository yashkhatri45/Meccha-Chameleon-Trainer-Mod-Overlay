const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

const root = path.join(__dirname, '..');
const svg = fs.readFileSync(path.join(root, 'banner.svg'), 'utf8');
const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
const png = resvg.render().asPng();

fs.writeFileSync(path.join(root, 'preview.png'), png);
fs.copyFileSync(path.join(root, 'banner.svg'), path.join(root, 'preview.svg'));
console.log('preview.png + preview.svg written');
