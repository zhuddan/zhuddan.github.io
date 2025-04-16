import Image from 'next/image'
import React from 'react'

export default function MoonFestival() {
  return (
    <div className="flex items-center flex-col py-8 gap-y-3">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        但愿人长久, 千里共婵娟
      </h1>
      <Image
        alt="但愿人长久, 千里共婵娟"
        width={750}
        height={450}
        className="max-w-full"
        src="/imgs/moon.png"
      >
      </Image>
    </div>
  )
}
