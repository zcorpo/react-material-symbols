import type { SVGProps, JSX } from 'react'

export default function ResetTvFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M347.31-140v-80H100v-600h760v275.08H470.08l95.38-95.77-31.61-32-150.46 150.46 150.46 149.46 31.61-31.61-95.38-95.16H860V-220H612.69v80H347.31Z" />
    </svg>
  )
}
