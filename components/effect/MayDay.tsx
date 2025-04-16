import Image from 'next/image'
import React from 'react'

export default function MayDay() {
  return (
    <div className="flex items-center flex-col py-8 gap-y-8 relative">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        五一国际劳动节快乐
      </h1>
      <Image
        alt="五一国际劳动节快乐"
        width={300}
        height={211}
        className="max-w-full"
        src="/imgs/May-Day.jpg"
      >
      </Image>
    </div>
  )
}
