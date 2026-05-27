import type { SVGProps, JSX } from 'react'

export default function PlaylistAddCheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M146-349v-22h264v22H146Zm0-162v-22h426v22H146Zm0-161v-22h426v22H146Zm507 436L549-341l16-16 88 89 175-174 16 15-191 191Z" />
    </svg>
  )
}
