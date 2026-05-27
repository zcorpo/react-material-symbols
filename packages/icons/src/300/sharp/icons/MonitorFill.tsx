import type { SVGProps, JSX } from 'react'

export default function MonitorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M278.46-140v-65.69l40.46-40.46H100V-820h760v573.85H640.46l41.08 40.46V-140H278.46Z" />
    </svg>
  )
}
