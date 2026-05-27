import type { SVGProps, JSX } from 'react'

export default function Variables({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-274.02v-412.2h732.2v412.2h-732.2Zm68.13-68.13h595.7v-275.7h-595.7v275.7Zm0 0v-275.7 275.7Z" />
    </svg>
  )
}
