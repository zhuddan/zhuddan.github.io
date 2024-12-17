import clsx from 'clsx'
import React, { useMemo, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ColorTransform() {
  const [opacity, setOpacity] = React.useState(50)
  const [inputColor, setInputColor] = useState('#154AC6')
  const marks = Array.from({ length: 100 / 5 + 1 }, (_, index) => {
    return String(index * 5)
  })

  const output = useMemo(() => {
    if (opacity === 100)
      return `${inputColor}FF`
    const _opacity = opacity / 100
    const hex = (256 * _opacity).toString(16).toUpperCase()
    const _hex = hex.split('.')[0].padStart(2, '0')
    return inputColor + _hex
  }, [inputColor, opacity])

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

  function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
    const colorValue = event.target.value.replace(/^(?=[^#])/, '#')
    setInputColor(colorValue)
  }

  function handleSetOpacity(event: React.ChangeEvent<HTMLInputElement>) {
    const v = Number.parseInt(event.target.value)

    setOpacity(
      v >= 100 ? 100 : v <= 0 ? 0 : v,
    )
  }

  return (
    <>
      <ToastContainer />
      <div className="color-transform">
        <div className="flex items-center">
          <label htmlFor="color" className=" inline-block">
            颜色
          </label>
          <input
            id="color"
            className="w-20 h-8 ml-1"
            type="text"
            value={inputColor}
            onChange={updateColor}
          />
          <label htmlFor="opacity" className="inline-block ml-2">
            透明度
          </label>
          <input
            type="number"
            min={0}
            max={100}
            className="w-12 h-8 ml-1"
            value={opacity}
            step={5}
            onChange={handleSetOpacity}
          />
        </div>

        <div className="flex mt-4">
          <label htmlFor="opacity" className="inline-block ">
            结果
          </label>
          <input
            type="text"
            className="w-20 h-8 ml-1"
            value={output}
            readOnly
          />
          <button
            type="button"
            className="flex-shrink-0 ml-2 button button--primary"
            onClick={handleCopy}
          >
            复制
          </button>
        </div>

        <div className="w-full">
          <input
            id="opacity"
            type="range"
            className="hover:cursor-pointer w-full"
            min={0}
            max={100}
            value={opacity}
            step={5}
            onChange={handleSetOpacity}
            list="markers"
          />
          <datalist
            className="flex flex-col justify-between "
            id="markers"
            style={{
              writingMode: 'vertical-lr',
            }}

          >
            {
              marks.map((value) => {
                return (
                  <option
                    value={value}
                    key={value}
                    className="text-xs"
                    label={`${value}%`}
                  >
                  </option>
                )
              })
            }
          </datalist>
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
