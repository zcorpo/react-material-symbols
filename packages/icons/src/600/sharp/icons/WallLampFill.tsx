import type { SVGProps, JSX } from 'react'

export default function WallLampFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M101.91-110.39v-259.22h79.22v259.22h-79.22Zm119.22-90v-79.22h259.26V-440H214.7l125.18-416.96h360.34L825.3-440H559.61v239.61H221.13Z" />
    </svg>
  )
}
