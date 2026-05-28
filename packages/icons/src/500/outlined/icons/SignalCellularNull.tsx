import type { SVGProps, JSX } from 'react'

export default function SignalCellularNull({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m74.02-74.02 812.2-812.2v812.2H74.02Zm163.85-68.13h579.98v-580.22L237.87-142.15Z" />
    </svg>
  )
}
