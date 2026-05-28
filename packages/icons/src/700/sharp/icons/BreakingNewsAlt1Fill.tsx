import type { SVGProps, JSX } from 'react'

export default function BreakingNewsAlt1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M255-295h180v-60H255v60Zm391 0h60v-60h-60v60ZM255-450h180v-60H255v60Zm391 0h60v-216h-60v216ZM255-606h180v-60H255v60ZM47-95v-771h867v771H47Z" />
    </svg>
  )
}
