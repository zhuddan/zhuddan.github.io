import Image from 'next/image'
import React from 'react'

export default function QiXi() {
  return (
    <div className="flex items-center flex-col py-8 gap-y-3">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        七夕快乐
      </h1>

      <Image
        alt="七夕快乐"
        width={547}
        height={300}
        className="max-w-full"
        src="/imgs/qixi.jpg"
      >
      </Image>
    </div>
  )
}
