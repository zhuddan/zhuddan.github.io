import { getHistoryResumes } from '@/lib/resume-history-server'
import Link from 'next/link'

export default function Page() {
  const resumes = getHistoryResumes()
  return resumes.map((e) => {
    return (
      <Link className="block" key={e} href={`/resume/${e}`}>
        {e}
      </Link>
    )
  })
}

export async function generateMetadata() {
  return {
    title: '简历',
    description: '朱丹的个人简历',
  }
}
