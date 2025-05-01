import type { ImageProps } from 'next/image'
import type { ReactNode } from 'react'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import React from 'react'

export interface ImageEffectProps extends ImageProps {
  title?: string
  footer?: ReactNode
}

export default function ImageEffect(
  {
    title,
    footer,
    ...rest
  }: ImageEffectProps,
) {
  return (
    <div className="flex items-center flex-col py-8 gap-y-8 relative">
      {
        title
        && (
          <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
            {title}
          </h1>
        )
      }
      <ImageZoom
        className="max-w-full rounded"
        {...rest}
      >
      </ImageZoom>

      {footer}
    </div>
  )
}
