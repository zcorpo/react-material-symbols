import type { SVGProps } from 'react'

export default function ThumbsUpDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M0-394.26v-354.11L211.63-960l42.11 47.11-33.52 153.85h261.69v109.17L373.15-394.26H0ZM748.37 0l-42.11-47.11 33.76-154.09H478.09v-109.17l109-255.37H960v354.11L748.37 0Z" />
    </svg>
  )
}
