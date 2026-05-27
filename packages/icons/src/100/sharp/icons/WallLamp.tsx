import type { SVGProps } from 'react'

export default function WallLamp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M158-172v-188h22v188h-22Zm168-290h388l-75-252H402l-76 252Zm0 0h388-388Zm-66 207v-22h249v-163H296l89-296h270l89 296H531v185H260Z" />
    </svg>
  )
}
