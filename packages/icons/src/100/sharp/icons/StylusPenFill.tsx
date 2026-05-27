import type { SVGProps, JSX } from 'react'

export default function StylusPenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m287-358 81-317h63v-52l46-101h6l47 101v52h63l81 317H287Zm-75 186 31-80h474l31 80H212Z" />
    </svg>
  )
}
