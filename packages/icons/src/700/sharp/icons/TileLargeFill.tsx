import type { SVGProps, JSX } from 'react'

export default function TileLargeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-279h333v279H95Zm438 0v-279h333v279H533ZM95-479v-387h771v387H95Z" />
    </svg>
  )
}
