import type { ImageProps } from 'next/image'
import type { ReactNode } from 'react'

interface FestivalLunar {
  /**
   * 农历日期
   */
  lunar: string
}

interface FestivalSolar {
  /**
   * 公历日期
   */
  solar: `${number}${number}-${number}${number}`
}

interface FestivalTerm {
  /**
   * 清明
   */
  term: true
}

interface FestivalBirthday {
  /**
   * 生日
   */
  birthday: string
}

interface FestivalTypeBase {
  /**
   * 节日名称
   */
  name: string
  /**
   * 标题
   */
  title: string
  /**
   * 底部描述
   */
  footer?: ReactNode
  /**
   * 庆祝图片
   */
  img?: ImageProps
}

type FestivalType = (FestivalLunar | FestivalSolar | FestivalTerm | FestivalBirthday) & FestivalTypeBase

/**
 * 节日
 */
export const FESTIVALS: FestivalType[] = [
  {
    name: '君君生日',
    title: '祝君君生日快乐！',
    birthday: '06-19',
  },
  {
    name: '朱朱生日',
    title: '祝朱朱生日快乐！',
    birthday: '九月初五',
  },
  // {
  //   name: '左旭生日',
  //   title: '祝左旭生日快乐！',
  //   birthday: '10-17',
  // },
  {
    name: '元旦',
    title: '新年快乐',
    solar: '01-01',
    img: {
      src: '/effect/0101.jpg',
      width: 2500,
      height: 1666,
      alt: '',
    },
    footer:
    <>
      <p className="text-sm absolute right-2 bottom-2 opacity-80 hover:opacity-100 hover:font-bold cursor-heart">
        ❤️
        {new Date().getFullYear() - 2023}
        {' '}
        years of love, countless heartbeats as one.
      </p>
    </>,
  },
  {
    name: '春节',
    title: '春节快乐',
    lunar: '正月初一',
    img: {
      src: '/effect/春节.jpg',
      width: 772,
      height: 512,
      alt: '',
    },
  },
  {
    name: '元宵节',
    title: '元宵节快乐',
    lunar: '正月十五',
    img: {
      src: '/effect/元宵.jpg',
      width: 800,
      height: 533,
      alt: '',
    },
  },
  {
    name: '情人节',
    title: '情人节快乐',
    solar: '02-14',
    img: {
      src: '/effect/0214.jpg',
      width: 512,
      height: 512,
      alt: '',
    },
  },
  {
    name: '清明',
    title: '清明时节雨纷纷',
    term: true,
    img: {
      src: '/effect/清明.jpg',
      width: 401,
      height: 308,
      alt: '',
    },
  },
  {
    name: '国际妇女节',
    title: '国际妇女节快乐',
    solar: '03-08',
    img: {
      src: '/effect/0308.jpg',
      width: 998,
      height: 599,
      alt: '',
    },
  },
  {
    name: '国际劳动节',
    title: '国际劳动节快乐',
    solar: '05-01',
    img: {
      src: '/effect/Socialists_in_Union_Square,_N.Y.C._(cropped).jpg',
      width: 4680,
      height: 2992,
      alt: '',
    },
  },
  {
    name: '五四青年节',
    title: '五四快乐!',
    solar: '05-04',
    img: {
      src: '/effect/May_Fourth_Movement_students_(cropped).jpg',
      width: 2348,
      height: 1634,
      alt: '',
    },
    footer:
    <>
      <p className="w-full">「愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。有一分热，发一分光，就令萤火一般，也可以在黑暗里发一点光，不必等候炬火。」</p>
      <p className="text-right w-full">—— 鲁迅</p>
    </>,
  },
  {
    name: '儿童节',
    title: '儿童节快乐!',
    solar: '06-01',
    img: {
      src: '/effect/0601.jpg',
      width: 660,
      height: 509,
      alt: '',
    },
  },
  {
    name: '端午节',
    title: '端午安康!',
    lunar: '五月初五',
    img: {
      src: '/effect/元_佚名_臨王振鵬_金明池圖_卷-Dragon_Boat_Regatta_on_Jinming_Lake_MET_DP204603.jpg',
      width: 3891,
      height: 1950,
      alt: '',
    },
  },
  {
    name: '七夕',
    title: '七夕快乐',
    lunar: '七月初七',
    img: {
      src: '/effect/七夕.jpg',
      width: 660,
      height: 509,
      alt: '',
    },
  },
  {
    name: '中秋节',
    title: '但愿人长久 千里共婵娟',
    lunar: '八月十五',
    img: {
      src: '/effect/moon.jpg',
      width: 768,
      height: 480,
      alt: '',
    },
  },
]
