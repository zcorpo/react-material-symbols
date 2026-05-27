import type { SVGProps, JSX } from 'react'

export default function PlaylistPlayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-335v-22h265v22H172Zm0-162v-22h424v22H172Zm0-161v-22h424v22H172Zm498 486v-214l159 108-159 106Z" />
    </svg>
  )
}
