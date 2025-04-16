import Image from 'next/image'
import React from 'react'

export default function DuanWu() {
  return (
    <div className="flex items-center flex-col py-8 gap-y-8 relative">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        端午安康
      </h1>
      <Image
        alt="端午安康"
        width={500}
        height={889}
        className="max-w-full"
        src="/imgs/duan-wu.jpg"
      >
      </Image>
    </div>
  )
}
