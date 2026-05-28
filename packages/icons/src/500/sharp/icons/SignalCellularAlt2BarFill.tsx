import type { SVGProps, JSX } from 'react'

export default function SignalCellularAlt2BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M195.7-154.02v-234.26h108.37v234.26H195.7Zm251.19 0v-434.26h108.13v434.26H446.89Z" />
    </svg>
  )
}
