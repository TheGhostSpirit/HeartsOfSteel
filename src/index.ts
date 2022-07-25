import * as fs from 'fs';
import { Bitmap } from 'bitmap-ts';

const file = fs.readFileSync('assets/provinces.bmp');
const bmp = new Bitmap(new File([], 'provinces.bmp'));

console.log(bmpBuffer);
