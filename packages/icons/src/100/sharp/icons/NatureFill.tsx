import type { SVGProps, JSX } from 'react'

export default function NatureFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M261-126v-22h208v-204H360q-62 0-105-43t-43-105q0-51 35-89t83-59q8-80 48-120t102-40q62 0 102 40t48 120q49 19 83.5 58t34.5 90q0 62-43 105t-105 43H491v204h211v22H261Z" />
    </svg>
  )
}
