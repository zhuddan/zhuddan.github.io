import Image from 'next/image'
import React from 'react'

export default function InternationalWomenSDay() {
  return (
    <div className="flex items-center flex-col py-8 gap-y-8 relative">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        国际妇女节快乐
      </h1>
      <Image
        alt="国际妇女节快乐"
        width={360}
        height={558}
        className="max-w-full"
        src="/imgs/International-Women’s-Day.jpg"
      >
      </Image>
    </div>
  )
}
