import type { MDXComponents } from 'mdx/types'
import { File, Files, Folder } from 'fumadocs-ui/components/files'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { Alert } from './Alert'
import { CodeDetails } from './CodeDetails'
import Mermaid from './Mermaid'
import { NodeCmd } from './NodeCmd'

export default {
  Tab,
  Tabs,
  File,
  Folder,
  Files,
  Alert,
  CodeDetails,
  Mermaid,
  NodeCmd,
  img: props => <ImageZoom {...(props as any)} />,
} satisfies MDXComponents
