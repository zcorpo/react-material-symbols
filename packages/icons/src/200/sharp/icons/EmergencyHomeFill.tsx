import type { SVGProps, JSX } from 'react'

export default function EmergencyHomeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M464.62-433.08h30.76v-209.23h-30.76v209.23Zm29.46 78.7q5.92-5.93 5.92-14.08 0-8.16-5.92-14.08-5.93-5.92-14.08-5.92t-14.08 5.92q-5.92 5.92-5.92 14.08 0 8.15 5.92 14.08 5.93 5.92 14.08 5.92t14.08-5.92ZM480-106.15 106.15-480 480-853.85 853.85-480 480-106.15Z" />
    </svg>
  )
}
