import type { SVGProps } from 'react'

export default function SchemaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M195.38-75.38v-160H280V-400h-84.62v-160H280v-164.62h-84.62v-160h200v160h-84.61V-560h84.61v64.62h209.24V-560h200v160h-200v-64.62H395.38V-400h-84.61v164.62h84.61v160h-200Z" />
    </svg>
  )
}
