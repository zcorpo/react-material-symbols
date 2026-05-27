import type { SVGProps } from 'react'

export default function LocalHospitalFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M464-306h33v-158h157v-33H497v-157h-33v157H306v33h158v158ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
