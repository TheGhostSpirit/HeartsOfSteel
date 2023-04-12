import map from './map.json' assert { type: 'json' };

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

map.regions.forEach((region) => {
  const [ firstVertex ] = region.vertices;
  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.moveTo(firstVertex.x, firstVertex.y);
  region.vertices.forEach((vertex, i) => {
    if (i > 0) {
      ctx.lineTo(vertex.x, vertex.y);
    }
  });
  ctx.lineTo(firstVertex.x, firstVertex.y);
  ctx.stroke();
});
