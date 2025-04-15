import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { useMemo } from 'react'

interface NodeCmdProps {
  type: 'install' | 'run'
  cmd: string
}

const cmds = [
  {
    name: 'npm',
    cmd: { install: 'i', run: 'run' },
  },
  {
    name: 'pnpm',
    cmd: { install: 'add', run: '' },
  },
  {
    name: 'yarn',
    cmd: { install: 'add', run: '' },
  },
] as const

export function NodeCmd({
  type,
  cmd,
}: NodeCmdProps) {
  const cmdList = useMemo(() => {
    return cmds.map((e) => {
      return {
        name: e.name,
        cmd: [e.name, e.cmd[type], cmd].filter(e => !!e).join(' '),
      }
    })
  }, [cmd, type])
  return (
    <Tabs items={cmds.map(e => e.name)}>
      {
        cmdList.map((e) => {
          return (
            <Tab key={e.name} value={e.name}>
              <DynamicCodeBlock code={e.cmd} lang="shell" />
            </Tab>
          )
        })
      }
    </Tabs>
  )
}
