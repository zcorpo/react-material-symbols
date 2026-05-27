import type { SVGProps } from 'react'

export default function HealthCrossFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M315.7-105.87V-315.7H105.87v-329.6H315.7v-209.4h329.6v209.4h209.4v329.6H645.3v209.83H315.7Z" />
    </svg>
  )
}
