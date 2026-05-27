import type { SVGProps } from 'react'

export default function Wifi1BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440.08-163.23q-17-17-17-39.92 0-22.93 17-39.93t39.92-17q22.92 0 39.92 17t17 39.93q0 22.92-17 39.92t-39.92 17q-22.92 0-39.92-17Z" />
    </svg>
  )
}
