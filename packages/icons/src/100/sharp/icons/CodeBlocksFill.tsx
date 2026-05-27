import type { SVGProps, JSX } from 'react'

export default function CodeBlocksFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m383-374 16-16-90-90 89-89-17-16-104 105 106 106Zm195 0 105-106-105-106-17 16 90 90-90 90 17 16ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
