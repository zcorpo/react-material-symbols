import type { SVGProps, JSX } from 'react'

export default function PlaylistPlayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-266v-93h314v93H95Zm0-187v-94h476v94H95Zm0-188v-93h476v93H95ZM640-95v-348l266 174L640-95Z" />
    </svg>
  )
}
