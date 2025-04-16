import Image from 'next/image'
import React from 'react'

export default function YouthDay() {
  return (
    <div className="flex items-center flex-col py-8 gap-y-8 relative">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        五四青年节快乐
      </h1>
      <Image
        alt="五四青年节快乐"
        width={500}
        height={348}
        className="max-w-full"
        src="/imgs/YouthDay.jpg"
      >
      </Image>
      <p className="w-full">「愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。有一分热，发一分光，就令萤火一般，也可以在黑暗里发一点光，不必等候炬火。」</p>
      <p className="text-right w-full">—— 鲁迅</p>
    </div>
  )
}
