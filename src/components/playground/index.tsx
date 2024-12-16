import type { SandpackFiles } from '@codesandbox/sandpack-react'
import { loadSandpackClient } from '@codesandbox/sandpack-client'
import { Sandpack, SandpackCodeEditor, SandpackConsole, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import React, { useMemo } from 'react'

function Playground({ children }: { children: React.ReactNode }) {
  const files = useMemo(() => {
    function getFiles(element: React.ReactNode) {
      const files: SandpackFiles = {

      }
      const elements = Array.isArray(element)
        ? element
        : [element]

      for (let index = 0; index < elements.length; index++) {
        const element = elements[index]
        const result = getCode(element)
        if (result) {
          const isEntry = Object.keys(files).length === 0
          files[result.fileName] = {
            code: result.code,
            active: isEntry,
          }
          if (isEntry) {
            files['index.ts'] = {
              code: `import './${result.fileName}'`,
              hidden: true,
              active: false,
            }
          }
        }
      }
      return files
    }

    function getCode(element: any) {
      if (element.props.children) {
        const children = element.props.children
        if (typeof children !== 'string') {
          return getCode(children)
        }
        else {
          const language = element.props.className.replace('language-', '') || 'typescript'
          const code = element.props.children as string
          const fileName = element.props.metastring.match(/title="([^"]+)"/)?.[1]
          return {
            language,
            code,
            fileName,
          }
        }
      }
      return undefined
    }

    return getFiles(children)
  }, [children])

  return (
    <SandpackProvider
      files={files}
      theme="light"
      template="vanilla-ts"
    >
      <SandpackLayout>
        <SandpackCodeEditor showTabs />
        <SandpackConsole standalone />
      </SandpackLayout>
    </SandpackProvider>
  )
}
export default Playground
