import type { SVGProps, JSX } from 'react'

export default function ArrowMenuCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M427.83-276.69v-407.18L217.96-480l209.87 203.31Zm115 170.82h79.21V-854.7h-79.21v748.83Z" />
    </svg>
  )
}
