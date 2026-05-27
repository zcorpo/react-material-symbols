import type { SVGProps, JSX } from 'react'

export default function StatMinus3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-118 276-322l16-16 188 189 188-189 16 16-204 204Zm0-240L276-562l16-16 188 188 188-188 16 16-204 204Zm0-241L276-803l16-16 188 189 188-189 16 16-204 204Z" />
    </svg>
  )
}
