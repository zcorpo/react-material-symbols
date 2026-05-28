import type { SVGProps, JSX } from 'react'

export default function FeaturedVideoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194-408h361v-278H194v278ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
