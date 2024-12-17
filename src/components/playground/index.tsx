import type { SandpackFiles, SandpackSetup } from '@codesandbox/sandpack-react'
import { loadSandpackClient } from '@codesandbox/sandpack-client'
import {
  Sandpack,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import React, { useMemo } from 'react'

function Playground({
  children,
}: {
  children: React.ReactNode
}) {
  const files = useMemo(() => {
    function getFiles(element: React.ReactNode) {
      const files: SandpackFiles = { }
      const elements = Array.isArray(element)
        ? element
        : [element]

      for (let index = 0; index < elements.length; index++) {
        const element = elements[index]
        const result = getCode(element)
        if (result) {
          const isEntry = result.entry
          const readOnly = result.entry
          files[result.fileName] = {
            code: result.code,
            active: isEntry,
            readOnly: !!readOnly,
          }
          if (isEntry) {
            if (result.language !== 'html') {
              files['index.ts'] = {
                code: `import './${result.fileName}'`,
                hidden: true,
                active: false,
              }
            }
            else {
              files['index.ts'] = {
                code: ` `,
                hidden: true,
                active: false,
              }
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
          const entry = element.props.metastring.match(/entry="([^"]+)"/)?.[1]
          const readOnly = element.props.metastring.match(/readOnly="([^"]+)"/)?.[1]

          return {
            language,
            code,
            fileName,
            entry,
            readOnly,
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
        {/* <SandpackCodeEditor showTabs /> */}
        <SandpackPreview
          showOpenInCodeSandbox={false}
          showNavigator={false}
        />
        {/* <SandpackConsole standalone /> */}
      </SandpackLayout>
    </SandpackProvider>
  )
}
export default Playground
