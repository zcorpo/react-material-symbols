import type { SVGProps, JSX } from 'react'

export default function KeepFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m586-448 60 57v22H491v188l-11 11-11-11v-188H314v-22l58-57v-318h-43v-22h300v22h-43v318Z" />
    </svg>
  )
}
