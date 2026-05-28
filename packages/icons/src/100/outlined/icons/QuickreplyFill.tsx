import type { SVGProps, JSX } from 'react'

export default function QuickreplyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M758-156v-136h-34v-168h68l-35 123h65l-64 181Zm-626-24v-594q0-23 15.5-38.5T186-828h588q23 0 38.5 15.5T828-774v200H610v282H244L132-180Z" />
    </svg>
  )
}
