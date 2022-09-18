export const useMousePosition = () => {
  const position = $ref({ x: 0, y: 0 })
  document.body.addEventListener('mousemove', e => {
    position.x = e.clientX
    position.y = e.clientY
  })

  return position
}
