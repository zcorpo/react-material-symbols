import type { SVGProps } from 'react'

export default function VideocamFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h640v275l160-160v410L720-435v275H80Z" />
    </svg>
  )
}
