import type { SVGProps, JSX } from 'react'

export default function PlaylistAddFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M146-349v-22h286v22H146Zm0-162v-22h449v22H146Zm0-161v-22h449v22H146Zm523 486v-163H506v-22h163v-163h22v163h163v22H691v163h-22Z" />
    </svg>
  )
}
