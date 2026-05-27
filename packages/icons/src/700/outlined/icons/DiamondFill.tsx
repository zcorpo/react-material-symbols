import type { SVGProps } from 'react'

export default function DiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m359-625 98-226h46l98 226H359Zm96 493L85-575h370v443Zm50 0v-443h370L505-132Zm155-493L560-851h207l113 226H660Zm-580 0 113-226h207l-99 226H80Z" />
    </svg>
  )
}
