import Image from 'next/image'
import React from 'react'

const profile = [
  [
    { label: '姓名', key: 'name', value: '朱丹' },
    { label: '性别', key: 'gender', value: '男' },
    { label: '出生年月', key: 'birth', value: '1995年8月' },
    { label: '民族', key: 'ethnicity', value: '彝族' },
    { label: '专业', key: 'major', value: '通信工程' },
  ],
  [
    { label: '学历', key: 'education', value: '本科' },
    { label: '政治面貌', key: 'politics', value: '无' },
    { label: '户籍', key: 'residence', value: '云南昆明' },
    { label: '身高', key: 'height', value: '172 cm' },
    { label: '婚育状况', key: 'marital', value: '未婚' },
  ],
] as const

export default function Profile() {
  return (
    <div className="grid sm:grid-cols-[repeat(2,1fr)_auto] grid-rows-2 sm:grid-rows-1 grid-cols-[auto_1fr] gap-4 items-start">
      {/* 左侧文字列 */}
      <div className="space-y-2">
        {profile[0].map(item => (
          <div key={item.key} className="flex gap-2">
            <span className="font-semibold">
              {item.label}
              ：
            </span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      {/* 右侧文字列 */}
      <div className="space-y-2 ">
        {profile[1].map(item => (
          <div key={item.key} className="flex gap-2">
            <span className="font-semibold">
              {item.label}
              ：
            </span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      {/* 右侧图片 */}
      <div className="sm:col-start-3 col-start-2 row-[1/3] h-full">
        <Image
          alt="profile"
          src="/profile.jpg"
          width={319}
          height={425}
          className=" sm:max-h-[172px] h-auto !w-auto !m-0"
        />
      </div>
    </div>
  )
}
