import type { SVGProps, JSX } from 'react'

export default function NestMultiRoomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m160-600 320-240 320 240H160Zm0 480v-180h370v180H160Zm430 0v-180h210v180H590ZM160-360v-180h210v180H160Zm270 0v-180h370v180H430Z" />
    </svg>
  )
}
