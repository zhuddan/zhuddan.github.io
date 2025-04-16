import Image from 'next/image'
import React from 'react'

export default function QingMing() {
  return (
    <div className="flex items-center flex-col py-8 gap-y-8 relative">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        清明时节雨纷纷
      </h1>
      <Image
        alt="清明时节雨纷纷"
        width={700}
        height={400}
        className="max-w-full"
        src="/imgs/qing-ming.jpg"
      >
      </Image>
    </div>
  )
}
