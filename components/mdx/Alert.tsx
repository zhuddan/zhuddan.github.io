import type { ReactNode } from 'react'
import { Flame, Info, Lightbulb, TriangleAlert } from 'lucide-react'

type AlertType = 'info' | 'warning' | 'danger' | 'tip'

const bgMap: Record<AlertType, ReactNode> = {
  info: <Info />,
  warning: <TriangleAlert />,
  danger: <Flame />,
  tip: <Lightbulb />,
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
      className="border-l-4 rounded px-2 py-4"
    >
      <div className="flex">
        {icon}
        <span className="ml-2 uppercase font-bold">{type}</span>
      </div>
      {children}
    </div>
  )
}
