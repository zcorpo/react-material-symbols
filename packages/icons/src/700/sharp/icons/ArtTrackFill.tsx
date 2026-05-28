import type { SVGProps, JSX } from 'react'

export default function ArtTrackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M628-175H17v-611h611v611Zm86 0v-611h72v611h-72Zm157 0v-611h72v611h-72ZM158-357h325L383-490l-85 110-60-82-80 105Z" />
    </svg>
  )
}
