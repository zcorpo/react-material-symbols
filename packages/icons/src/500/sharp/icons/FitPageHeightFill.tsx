import type { SVGProps, JSX } from 'react'

export default function FitPageHeightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M380.89-618.26h198.46L480-717.61l-99.11 99.35ZM480-242.15l99.35-99.35H380.89L480-242.15ZM806.22-74.02h-652.2v-812.2h652.2v812.2Z" />
    </svg>
  )
}
