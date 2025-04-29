'use client'
import Link from 'next/link'

export default function ResumeHistory({
  historyResumes,
}: { historyResumes: string[] }) {
  return historyResumes.map((item) => {
    return <Link href={`/resume/${item}`} key={item}>{item}</Link>
  })
}
