import type { SVGProps } from 'react'

export default function Speed17x({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M274-305v-22h22v22h-22Zm-89 0v-328h-71v-22h93v350h-22Zm413-1 108-186-95-162h30l81 139 80-139h28l-93 160 109 188h-29l-96-163-96 163h-27Zm-185 1 83-328H335v-22h185v25l-83 325h-24Z" />
    </svg>
  )
}
