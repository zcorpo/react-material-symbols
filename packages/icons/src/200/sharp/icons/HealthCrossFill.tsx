import type { SVGProps } from 'react'

export default function HealthCrossFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M350.08-160v-190.08H160v-259.3h190.08V-800h259.3v190.62H800v259.3H609.38V-160h-259.3Z" />
    </svg>
  )
}
