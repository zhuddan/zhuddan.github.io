import React, { useMemo } from 'react'
import './color-input.css'

export default function ColorInput() {
  const [opacity, setOpacity] = React.useState(50)
  const [color, setColor] = React.useState('#154ac6')

  const marks = Array.from({ length: 100 / 5 + 1 }, (_, index) => {
    return String(index * 5)
  })

  const output = useMemo(() => {
    if (opacity === 100)
      return `${color}FF`
    const _opacity = opacity / 100
    const hex = (256 * _opacity).toString(16).toUpperCase()
    const _hex = hex.split('.')[0].padStart(2, '0')
    return color + _hex
  }, [color, opacity])

  return (
    <div className="color-input">
      <label htmlFor="color">
        颜色
        {' '}
        {color}
      </label>
      <br />
      <input
        id="color"
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
      />

      <label htmlFor="opacity">
        透明度
        {' '}
        {`${opacity}%`}
      </label>
      <br />
      <input
        id="opacity"
        type="range"
        min={0}
        max={100}
        step={5}
        onChange={e => setOpacity(Number.parseInt(e.target.value))}
        list="markers"
      />
      <datalist id="markers">
        {
          marks.map((value) => {
            return (
              <option
                value={value}
                key={value}
                label={`${value}%`}
              >
              </option>
            )
          })
        }
      </datalist>

      <div>
        <input type="text" value={output} readOnly />
      </div>

      <div className="color-box" style={{ backgroundColor: output }}>

      </div>
    </div>
  )
}
