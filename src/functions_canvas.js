//canvas上でなんかベクターで書くやつはここで追加

function rect(x, y, w, h, ctx) {
  ctx.strokeStyle = '#94FFA0'
  ctx.strokeRect(x, y, w, h)
}

export { rect }
