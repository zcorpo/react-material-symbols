import type { SVGProps, JSX } from 'react'

export default function Speed02x({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-305v-22h22v22h-22Zm94 0v-187h163v-141H266v-22h185v185H288v143h163v22H266Zm274-1 108-186-95-162h30l81 139 80-139h28l-93 160 109 188h-29l-96-163-96 163h-27Z" />
    </svg>
  )
}
