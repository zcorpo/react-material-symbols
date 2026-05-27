import type { SVGProps } from 'react'

export default function BatteryAndroid5({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-280v-400h724.62v400H80Zm470.77-30.77h223.08v-338.46H550.77v338.46ZM840-398.54v-162.15h40v162.15h-40Z" />
    </svg>
  )
}
