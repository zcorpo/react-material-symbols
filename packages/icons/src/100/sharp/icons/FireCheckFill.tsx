import type { SVGProps, JSX } from 'react'

export default function FireCheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m650-163 162-161 16 15-178 177-96-95 16-17 80 81ZM212-440q0-95 57.5-189T428-787v39q0 56 38.5 94t94.5 38q19 0 37.5-6t35.5-17l17-11q55 45 81 115.5T745-391l-95 96-81-81-149 149 55 54q-3 0-5.5.5t-4.5.5q-106-6-179.5-83T212-440Z" />
    </svg>
  )
}
