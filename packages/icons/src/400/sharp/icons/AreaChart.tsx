import type { SVGProps, JSX } from 'react'

export default function AreaChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-160v-520l160 120 200-280 200 160h160v520H120Zm204-91 160-221 296 231v-379H659L492-754 294-475l-114-85v194l144 115Z" />
    </svg>
  )
}
