import type { SVGProps, JSX } from 'react'

export default function InkPenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M585-461 461-585l155-155-30-30-234 234-43-43 278-278 73 73 70-70 124 124-269 269ZM244-120H120v-124l298-298 124 124-298 298Z" />
    </svg>
  )
}
