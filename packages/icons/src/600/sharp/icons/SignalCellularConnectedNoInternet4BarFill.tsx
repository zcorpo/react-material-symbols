import type { SVGProps, JSX } from 'react'

export default function SignalCellularConnectedNoInternet4BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-65.87 894.7-894.7v253.27H734.91v575.56H65.87Zm749.04-129.61v-365.95h79.79v365.95h-79.79Zm0 129.61v-79.22h79.79v79.22h-79.79Z" />
    </svg>
  )
}
