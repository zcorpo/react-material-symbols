import type { SVGProps } from 'react'

export default function SplitscreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-529.41v-316.81h732.2v316.81h-732.2Zm0 415.39v-317.33h732.2v317.33h-732.2Z" />
    </svg>
  )
}
