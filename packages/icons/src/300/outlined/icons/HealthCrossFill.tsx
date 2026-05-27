import type { SVGProps } from 'react'

export default function HealthCrossFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M338.54-140v-198.54H140v-283.15h198.54V-820h283.15v198.31H820v283.15H621.69V-140H338.54Z" />
    </svg>
  )
}
