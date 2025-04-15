import dayjs from 'dayjs'

import {
  Building2,
  Cake,
  Calendar1,
  Mail,
  Milestone,
  // Phone,
  SquareUser,
} from 'lucide-react'

const MY_BIRTHDAY = '1995-08-05'
// const MY_PHONE = '15680717059'
const MY_EMAIL = 'zdecode@outlook.com'

function Age() {
  return <>{MY_BIRTHDAY}</>
}

function Birthday() {
  return (
    <>
      {dayjs().diff(dayjs(MY_BIRTHDAY), 'year')}
      岁
    </>
  )
}

export function Zd() {
  return (
    <div className="inline-grid   md:grid-cols-3 gap-4 ">
      <div className="flex gap-x-1">
        <SquareUser />
        <span>姓名: 朱丹</span>
      </div>
      <div className="flex gap-x-1">
        <Milestone />
        <span>职业: 前端工程师</span>
      </div>
      <div className="flex gap-x-1">
        <Calendar1 />
        <span>
          年龄:
          <Age />
        </span>
      </div>
      <div className="flex gap-x-1">
        <Cake />
        <span>
          生日:
          <Birthday />
        </span>
      </div>
      <div className="flex gap-x-1">
        <Building2 />
        <span>现居: 昆明</span>
      </div>
      <div className="flex gap-x-1">
        <Mail />
        <span>
          邮箱:

          <a href={`mailto:${MY_EMAIL}`}>
            {MY_EMAIL}
          </a>
        </span>
      </div>
      {/* <div className="flex gap-x-1">
        <Phone />
        电话:
        <span>
          <a href={`tel:${MY_PHONE}`}>
            {MY_PHONE}
          </a>
        </span>
      </div> */}
    </div>
  )
}
