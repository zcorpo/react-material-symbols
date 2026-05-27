import type { SVGProps } from 'react'

export default function GameButtonLFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-486q0-64 44.5-109T233-800h494q64 0 108.5 45T880-646v486H80Zm344-179h173v-46H474v-235h-50v281Z" />
    </svg>
  )
}
