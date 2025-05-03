import type { ReactNode } from 'react'
import { Flame, Info, Lightbulb, TriangleAlert } from 'lucide-react'

import './Alert.css'

type AlertType = 'info' | 'warning' | 'danger' | 'tip'

const bgMap: Record<AlertType, ReactNode> = {
  info: <Info size="1.5em" />,
  warning: <TriangleAlert size="1.5em" />,
  danger: <Flame size="1.5em" />,
  tip: <Lightbulb size="1.5em" />,
}

export function Alert({
  type = 'info',
  children,
}: {
  type?: AlertType
  children: ReactNode
}) {
  const icon = bgMap[type]
  const bg = {
    info: '#4cb3d4',
    warning: '#ffc426',
    danger: '#fb565b',
    tip: '#009400',
  }[type]
  return (
    <div
      style={{
        backgroundColor: `${bg}19`,
        borderLeftColor: bg,
      }}
      className="border-l-4 rounded px-2 py-4 Alert"
    >
      <div className="flex items-center mb-1">
        {icon}
        <span className="ml-2 uppercase text-base font-bold">{type}</span>
      </div>
      <div className="px-1">
        {children}
      </div>
    </div>
  )
}
