import type { SVGProps } from 'react'

export default function SoundDetectionGlassBreak({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-594v414l186-186 160 160 226-253v-135H194Zm0 572h572v-404L539-344 380-503 194-316v122Z" />
    </svg>
  )
}
