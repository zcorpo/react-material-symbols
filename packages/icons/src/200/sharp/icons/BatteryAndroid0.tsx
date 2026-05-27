import type { SVGProps, JSX } from 'react'

export default function BatteryAndroid0({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-280v-400h724.62v400H80Zm30.77-30.77h663.08v-338.46H110.77v338.46ZM840-398.54v-162.15h40v162.15h-40Zm-729.23 87.77v-338.46 338.46Z" />
    </svg>
  )
}
