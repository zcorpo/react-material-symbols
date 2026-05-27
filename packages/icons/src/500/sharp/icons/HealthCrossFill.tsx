import type { SVGProps } from 'react'

export default function HealthCrossFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M322.22-114.02v-208.2h-208.2v-316.56h208.2v-207.44h316.56v207.44h207.44v316.56H638.78v208.2H322.22Z" />
    </svg>
  )
}
