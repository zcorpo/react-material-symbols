import type { SVGProps } from 'react'

export default function TvFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M326.89-114.02v-80H74.02v-652.2h812.2v652.2H633.35v80H326.89Z" />
    </svg>
  )
}
