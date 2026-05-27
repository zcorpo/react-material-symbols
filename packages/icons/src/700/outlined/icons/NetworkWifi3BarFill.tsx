import type { SVGProps, JSX } from 'react'

export default function NetworkWifi3BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-62 0-600q96-96 218.5-154.5T480-813q139 0 261.5 58.5T960-600L480-62ZM247-459q53-42 111.5-63.5T480-544q63 0 122 21.5T714-459l115-129q-84-65-170-97.5T480-718q-93 0-179 32.5T132-588l115 129Z" />
    </svg>
  )
}
