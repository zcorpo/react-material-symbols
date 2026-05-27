import type { SVGProps } from 'react'

export default function TopicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-652.2h344.35L481-743.35h405.22v589.33H74.02ZM250-338.57h300v-60H250v60Zm0-160h460v-60H250v60Z" />
    </svg>
  )
}
