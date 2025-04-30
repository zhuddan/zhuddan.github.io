import dayjs from 'dayjs'

import {
  BriefcaseBusiness,
  // Building2,
  // Cake,
  // eslint-disable-next-line unused-imports/no-unused-imports
  Calendar1,
  GraduationCap,
  Mail,
  Milestone,
  School,
  SquareUser,
  // Phone,
  // eslint-disable-next-line unused-imports/no-unused-imports
  Wrench,
} from 'lucide-react'

const MY_BIRTHDAY = '1995-08-05'
// const MY_PHONE = '15680717059'
const MY_EMAIL = 'zdecode@outlook.com'

// eslint-disable-next-line unused-imports/no-unused-vars
function Age() {
  return (
    <>
      {dayjs().diff(dayjs(MY_BIRTHDAY), 'year')}
      岁
    </>
  )
}

// function Birthday() {
//   return (
//     <>{MY_BIRTHDAY}</>
//   )
// }

export default function Me() {
  return (
    <div className="print:grid-cols-3 grid md:grid-cols-4 sm:grid-cols-2 gap-4 " id="me">
      <div className="flex gap-x-1">
        <SquareUser />
        <span>姓名: 朱丹</span>
      </div>
      <div className="flex gap-x-1">
        <Milestone />
        <span>职业: 前端工程师</span>
      </div>
      <div className="flex gap-x-1">
        <BriefcaseBusiness />
        <span>
          工作经验:
          {' '}
          {new Date().getFullYear() - 2019}
          年
        </span>
      </div>
      <div className="flex gap-x-1">
        <School />
        <span>毕业院校: 成都理工大学</span>
      </div>
      <div className="flex gap-x-1">
        <GraduationCap />
        <span>学历: 本科</span>
      </div>
      {/* <div className="flex gap-x-1">
        <Wrench />
        <span>专业: 通信专业</span>
      </div> */}
      {/* <div className="flex gap-x-1 age">
        <Calendar1 />
        <span>
          年龄:
          {' '}
          <Age />
        </span>
      </div> */}
      {/* <div className="flex gap-x-1">
        <Cake />
        <span>
          生日:
          <Birthday />
        </span>
      </div> */}
      {/* <div className="flex gap-x-1">
        <Building2 />
        <span>现居: 昆明</span>
      </div> */}
      <div className="flex gap-x-1 col-span-1">
        <Mail />
        <span>
          <a href={`mailto:${MY_EMAIL}`} className="text-sm">
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
