import type { SVGProps, JSX } from 'react'

export default function TileMediumFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-186.85v-239.91H427v239.91H114.02Zm417.98 0v-239.91h314.22v239.91H532ZM114.02-532.76v-240.63h732.2v240.63h-732.2Z" />
    </svg>
  )
}
