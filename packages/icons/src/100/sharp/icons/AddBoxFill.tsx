import type { SVGProps } from 'react'

export default function AddBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-306h22v-163h163v-22H491v-163h-22v163H306v22h163v163ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
