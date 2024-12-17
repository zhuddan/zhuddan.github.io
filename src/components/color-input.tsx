import React, { useMemo } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import './color-input.css'
import 'react-toastify/dist/ReactToastify.css'

export default function ColorInput() {
  const [opacity, setOpacity] = React.useState(50)
  const [color, setColor] = React.useState('#154AC6')

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

  async function handleCopy() {
    try {
      // 复制逻辑
      navigator.clipboard.writeText('your text')
        .then(() => {
          console.log('复制成功!')
          toast.success('复制成功!')
        }, () => {
          console.log('复制成功!')
          toast.error('复制失败!')
        })
    }
    catch {
      toast.error('复制失败!')
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="color-input">
        <label htmlFor="color">
          颜色
          {' '}
          {color}
        </label>
        <br />
        <div className="input-wrapper">
          <input
            id="color"
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        </div>

        <label htmlFor="opacity">
          透明度
          {' '}
          {`${opacity}%`}
        </label>
        <br />
        <div className="input-wrapper">
          <input
            id="opacity"
            type="range"
            className="hover:cursor-pointer"
            min={0}
            max={100}
            step={5}
            onChange={e => setOpacity(Number.parseInt(e.target.value))}
            list="markers"
          />
        </div>
        <div className="input-wrapper">
          <datalist className="" id="markers">
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
        </div>

        <div className="input-wrapper flex mt-8">
          <input type="text" value={output} readOnly />
          <button
            type="button"
            className="flex-shrink-0 ml-2 button button--primary"
            onClick={handleCopy}
          >
            复制
          </button>
        </div>

        <div
          className="input-wrapper !h-20 mt-4 rounded"
          style={{ backgroundColor: output }}
        >

        </div>
      </div>
    </>
  )
}
