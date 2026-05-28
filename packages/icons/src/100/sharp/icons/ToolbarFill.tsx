import type { SVGProps, JSX } from 'react'

export default function ToolbarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-638v-150h616v150H172Zm0 466v-444h616v444H172Z" />
    </svg>
  )
}
