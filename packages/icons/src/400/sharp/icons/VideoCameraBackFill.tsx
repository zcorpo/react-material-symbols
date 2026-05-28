import type { SVGProps, JSX } from 'react'

export default function VideoCameraBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M205-333h400L476-508 370-368l-71-90-94 125ZM80-160v-640h640v275l160-160v410L720-435v275H80Z" />
    </svg>
  )
}
