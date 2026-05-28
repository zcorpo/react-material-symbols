import type { SVGProps, JSX } from 'react'

export default function ArrowMenuClose({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M425-301v-358L240-480l185 179Zm115 181h60v-720h-60v720Z" />
    </svg>
  )
}
