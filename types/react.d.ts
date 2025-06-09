import 'react'

declare module 'react' {
  interface CSSProperties {
    // Allow any CSS Custom Properties
    [cssVar: `--${string}`]: string
  }
}
