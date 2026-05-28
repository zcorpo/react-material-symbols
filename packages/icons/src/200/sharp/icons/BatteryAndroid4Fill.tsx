import type { SVGProps, JSX } from 'react'

export default function BatteryAndroid4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-280v-400h724.62v400H80Zm390.77-30.77h303.08v-338.46H470.77v338.46ZM840-398.54v-162.15h40v162.15h-40Z" />
    </svg>
  )
}
