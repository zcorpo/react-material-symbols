import type { SVGProps } from 'react'

export default function BackupTableFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M276-302h241v-241H276v241Zm0-263h504v-241H276v241Zm263 263h241v-241H539v241Zm-285 22v-548h548v548H254Zm-96 96v-516h22v494h494v22H158Z" />
    </svg>
  )
}
