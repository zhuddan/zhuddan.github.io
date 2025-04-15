import type { MDXComponents } from 'mdx/types'
import { File, Files, Folder } from 'fumadocs-ui/components/files'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { Alert } from './Alert'
import { CodeDetails } from './CodeDetails'
import { NodeCmd } from './NodeCmd'

export default {
  Tab,
  Tabs,
  File,
  Folder,
  Files,
  Alert,
  CodeDetails,
  NodeCmd,
} satisfies MDXComponents
