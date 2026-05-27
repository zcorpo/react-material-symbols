import type { SVGProps } from 'react'

export default function TopicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h253l74 74h369v462H132Zm137-140h262v-22H269v22Zm0-160h422v-22H269v22Z" />
    </svg>
  )
}
