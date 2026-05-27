import type { SVGProps, JSX } from 'react'

export default function Speed05x({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-305v-22h22v22h-22Zm368-1 108-186-95-162h30l81 139 80-139h28l-93 160 109 188h-29l-96-163-96 163h-27Zm-274 1v-22h163v-143H266v-185h185v22H288v141h163v187H266Z" />
    </svg>
  )
}
