const { drawEllipse } = replicad
const main = () => {
  return drawEllipse(20, 30).sketchOnPlane().extrude(50).fillet(2)
}
