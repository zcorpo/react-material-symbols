import type { SVGProps } from 'react'

export default function StylusPenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m287-358 81-317h63v-52l46-101h6l47 101v52h63l81 317H287Zm-75 186 18-47q6-15 18-24t29-9h406q17 0 29 9t18 24l18 47H212Z" />
    </svg>
  )
}
