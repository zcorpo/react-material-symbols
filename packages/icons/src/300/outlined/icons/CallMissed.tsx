import type { SVGProps, JSX } from 'react'

export default function CallMissed({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m485.77-279.46-300.38-300v218.15H140v-298.38h293.31v45.38H215.15l270.62 270.23 303.61-303.61L821-615.08 485.77-279.46Z" />
    </svg>
  )
}
