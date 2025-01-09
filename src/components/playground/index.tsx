import type { SandpackFiles, SandpackProviderProps, SandpackSetup } from '@codesandbox/sandpack-react'
import { loadSandpackClient } from '@codesandbox/sandpack-client'
import {
  Sandpack,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import clsx from 'clsx'
import React, { useMemo } from 'react'

interface PlaygroundProps {
  children: React.ReactNode
  showCodeEditor?: boolean
  template?: SandpackProviderProps['template']

  ReactStrictMode?: boolean

}

function Playground({
  children,
  showCodeEditor = true,
  template = 'vanilla-ts',
  ReactStrictMode = true,
}: PlaygroundProps) {
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
  console.log(files)
  return (
    <>
      <SandpackProvider
        files={{
          ...files,
          ...(template?.includes('react') && ReactStrictMode === false
            ? {

                '/index.js': {
                  code: `
              import React from "react";
              import ReactDOM from "react-dom/client";
              import App from "./App";
              ReactDOM.createRoot(document.getElementById('root')).render(
                <App />,
              );
             `,
                  hidden: true,
                },
              }
            : {}),
        }}
        theme="light"
        template={template}
        customSetup={
          {
            entry: 'console.log("x")',
          }
        }
        options={{

        }}
      >
        <SandpackLayout
          className={
            clsx(
              'md:!grid  grid-cols-2 grid-rows-2 md:h-[500px]',
              'grid-rows-[auto_1fr]',
            )
          }
        >
          {
            showCodeEditor && (
              <SandpackCodeEditor
                showTabs
                className="row-span-3 md:!h-full"
                showRunButton
              />
            )
          }
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showNavigator={false}
            className="col-start-2"
          />
          <SandpackConsole
            showHeader
            className="row-start-2 col-start-2 md:!h-full"
          />
        </SandpackLayout>
      </SandpackProvider>
    </>

  )
}
export default Playground
