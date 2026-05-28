import type { SVGProps, JSX } from 'react'

export default function ArrowMenuOpen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-120v-720h60v720h-60Zm175-181v-358l185 179-185 179Z" />
    </svg>
  )
}
