import type { SVGProps, JSX } from 'react'

export default function AlignHorizontalLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M115.39-100v-760h45.38v760h-45.38Zm151.54-201.15v-86.16h337.68v86.16H266.93Zm0-271.54v-86.16h577.68v86.16H266.93Z" />
    </svg>
  )
}
