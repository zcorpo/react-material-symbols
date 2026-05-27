import type { SVGProps, JSX } from 'react'

export default function WaterMediumFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M236-482q48-24 101.5-38T443-534q32 0 63 4.5t60 12.5q51 15 78 19.5t57 4.5h25l34-318H200l36 329ZM189-55 95-906h771L772-55H189Z" />
    </svg>
  )
}
