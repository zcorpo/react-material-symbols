import type { SVGProps, JSX } from 'react'

export default function ForumFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M227-201v-175h521v-360h175v701L757-201H227ZM37-264v-662h651v490H209L37-264Z" />
    </svg>
  )
}
