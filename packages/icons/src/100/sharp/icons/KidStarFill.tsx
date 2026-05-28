import type { SVGProps, JSX } from 'react'

export default function KidStarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m332-667 148-200 148 200 236 80-152 203 6 232-238-71-238 71 6-233L97-587l235-80Z" />
    </svg>
  )
}
