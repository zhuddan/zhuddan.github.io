import { getHistoryResumes } from '@/lib/resume-history-server'
import { BookText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ResumeHistory from './resume-history'

interface ResumeNavProps {
  history?: boolean
}
export default async function ResumeNav({
  history,
}: ResumeNavProps) {
  const historyResumes = history ? await getHistoryResumes() : []
  return (
    <nav className="print:hidden space-x-2 flex mb-4">
      {
        history
          ? (
              <span className="inline-flex items-center font-bold">
                <BookText size="1em" />
                历史简历
              </span>
            )
          : (
              <Link href="/resume" className="inline-flex items-center font-bold">
                {' '}
                <BookText size="1em" />
                最新简历
              </Link>
            )
      }
      {history && <ResumeHistory historyResumes={historyResumes} />}
    </nav>
  )
}
