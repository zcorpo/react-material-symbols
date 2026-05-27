import type { SVGProps } from 'react'

export default function FormatColorTextFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55 0v-180h851V0H55Zm134-300 240-566h112l234 566H660l-53-136H351l-54 136H189Zm190-212h201l-98-260h-4l-99 260Z" />
    </svg>
  )
}
