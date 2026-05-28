import type { SVGProps, JSX } from 'react'

export default function GroupedBarChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-212v-391h102v391H212Zm171 0v-210h102v210H383Zm263 0v-536h102v536H646Z" />
    </svg>
  )
}
