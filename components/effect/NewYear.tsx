'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import dayjs from 'dayjs'
import React from 'react'

const LOVE_BEGIN = '2023-01-01'

export default function NewYear({ date }: { date: string }) {
  const diff = dayjs(date).diff(LOVE_BEGIN, 'year')
  return (
    <div className="flex items-center flex-col py-8 gap-y-1 relative">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        {date}
      </h1>
      <DotLottieReact
        src="/lottie/new-year.lottie"
        loop
        autoplay
        className="max-w-full w-[500px]"
      />
      <p className="text-sm absolute right-2 bottom-2 opacity-80 hover:opacity-100 hover:font-bold cursor-heart">
        ❤️
        {diff}
        {' '}
        years of love, countless heartbeats as one.
      </p>
    </div>
  )
}
