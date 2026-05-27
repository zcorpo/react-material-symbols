import type { SVGProps, JSX } from 'react'

export default function WallLampFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M158-172v-188h22v188h-22Zm102-83v-22h249v-163H296l89-296h270l89 296H531v185H260Z" />
    </svg>
  )
}
