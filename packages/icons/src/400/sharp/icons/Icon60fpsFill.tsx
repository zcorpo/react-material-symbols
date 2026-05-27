import type { SVGProps, JSX } from 'react'

export default function Icon60fpsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-200v-560h292v80H160v138h255v342H80Zm80-80h175v-182H160v182Zm422 0h218v-400H582v400Zm-80 80v-560h378v560H502Z" />
    </svg>
  )
}
