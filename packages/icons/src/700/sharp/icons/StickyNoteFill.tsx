import type { SVGProps, JSX } from 'react'

export default function StickyNoteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M649.72-95H95v-771h771v554.72L649.72-95ZM600-189l171-171H600v171ZM444-315h72v-258h129v-72H315v72h129v258Z" />
    </svg>
  )
}
