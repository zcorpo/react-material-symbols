import type { SVGProps, JSX } from 'react'

export default function MagnificationSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194-528h161v-158H194v158ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
