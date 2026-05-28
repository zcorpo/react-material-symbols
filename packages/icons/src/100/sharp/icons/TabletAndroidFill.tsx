import type { SVGProps, JSX } from 'react'

export default function TabletAndroidFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-92v-776h616v776H172Zm242-76h138v-28H414v28ZM194-271h572v-490H194v490Z" />
    </svg>
  )
}
