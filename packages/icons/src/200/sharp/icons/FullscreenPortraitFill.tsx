import type { SVGProps, JSX } from 'react'

export default function FullscreenPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M316.92-236.92h326.16v-486.16H316.92v486.16ZM760-120H200v-720h560v720Z" />
    </svg>
  )
}
