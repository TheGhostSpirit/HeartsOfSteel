import * as fs from 'fs';
import { PNG } from 'pngjs';

// DOMAIN RULES: -> USE PIXEL PNG MAP
// -> define zones with adjacent pixels of the same color

type Color = string;

const iter = function*(n: number) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
};

const map = new Map<Color, string[]>();
const img = fs.readFileSync('assets/crop.png');
const png = PNG.sync.read(img);

for (const y of iter(png.height)) {
  for (const x of iter(png.width)) {
    const index = (png.width * y + x) << 2;
    const color = `${png.data[index]};${png.data[index + 1]};${png.data[index + 2]}`;
    map.set(
      color,
      [ ...(map.get(color) ?? []), `${x};${y}` ]
    );
  }
}

// detect zones
// check if pixels of same color are adjacent => throw if error
// detect borders -> convert to vectors ?
// do a
console.log(map);

// new PNG().parse(img, (_, data) => {
//   for ()
//   console.log(data.data);
// });
