import Image from 'next/image'
import React from 'react'

export default function LanternFestival() {
  return (
    <div className="flex items-center flex-col py-8 gap-y-1 relative">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        元宵节快乐
      </h1>
      <Image
        alt="元宵节快乐"
        width={500}
        height={565}
        className="max-w-full"
        src="/imgs/LanternFestival.png"
      >
      </Image>
    </div>
  )
}
