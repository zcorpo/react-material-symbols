import type { SVGProps, JSX } from 'react'

export default function TileMediumFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-145v-281h332v281H95Zm437 0v-281h334v281H532ZM95-532v-284h771v284H95Z" />
    </svg>
  )
}
