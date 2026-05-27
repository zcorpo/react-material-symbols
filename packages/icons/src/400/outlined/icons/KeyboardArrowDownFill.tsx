import type { SVGProps } from 'react'

export default function KeyboardArrowDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z" />
    </svg>
  )
}
