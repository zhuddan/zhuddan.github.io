'use client'

import Image from 'next/image'
import React from 'react'

const age = Math.floor((Date.now() - new Date('1995-08-01').getTime()) / (86400 * 1000 * 365))

const profile = [
  [
    { label: '姓名', value: '朱丹' },
    { label: '性别', value: '男' },
    { label: '出生年月', value: `1995年8月 | ${age}岁` },
    { label: '毕业院校', value: '成都理工大学' },
  ],
  [
    { label: '专业', value: '通信工程' },
    { label: '学历', value: '本科' },
    { label: '手机', value: '15670717059' },
    { label: '邮箱', value: 'yobaci@163.com' },
  ],
] as const

export default function Profile() {
  return (
    <div className="grid sm:grid-cols-[repeat(2,1fr)_auto] grid-rows-2 sm:grid-rows-1 grid-cols-[auto_1fr] gap-4 items-start">
      {
        profile.map((profileGroup, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div className="space-y-2" key={index}>
              {profileGroup.map(item => (
                <div key={item.label} className="flex gap-2">
                  <span className="font-semibold">
                    {item.label}
                    ：
                  </span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          )
        })
      }
      {/* 右侧图片 */}
      <div className="sm:col-start-3 col-start-2 row-[1/3] h-full">
        <Image
          alt="profile"
          src="/profile.jpg"
          width={319}
          height={425}
          className="sm:max-h-[172px] print:h-[150px] h-auto !w-auto !m-0"
        />
      </div>
    </div>
  )
}
