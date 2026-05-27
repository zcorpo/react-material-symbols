import type { SVGProps } from 'react'

export default function CallReceived({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M177-175v-431h94v270l489-488 66 66-489 488h270v95H177Z" />
    </svg>
  )
}
