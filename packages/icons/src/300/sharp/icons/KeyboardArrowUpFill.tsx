import type { SVGProps } from 'react'

export default function KeyboardArrowUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-560.92 286.46-367.39 253.85-400 480-626.15 706.15-400l-32.61 32.61L480-560.92Z" />
    </svg>
  )
}
