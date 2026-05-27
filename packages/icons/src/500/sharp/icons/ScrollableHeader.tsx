import type { SVGProps } from 'react'

export default function ScrollableHeader({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-732.2h732.2v732.2h-732.2Zm68.13-68.13h595.7v-225.7h-595.7v225.7Zm0-294.07h595.7v-301.63h-595.7v301.63Zm0 0v-301.63 301.63Z" />
    </svg>
  )
}
