import type { SVGProps, JSX } from 'react'

export default function LastPageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m272-221-67-67 192-192-192-192 67-67 259 259-259 259Zm371 5v-528h94v528h-94Z" />
    </svg>
  )
}
