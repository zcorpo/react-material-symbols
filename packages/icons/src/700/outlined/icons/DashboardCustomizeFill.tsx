import type { SVGProps, JSX } from 'react'

export default function DashboardCustomizeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M75-885h381v381H75v-381Zm429 0h381v381H504v-381ZM75-456h381v381H75v-381Zm572 0h95v143h143v95H742v143h-95v-143H504v-95h143v-143Z" />
    </svg>
  )
}
