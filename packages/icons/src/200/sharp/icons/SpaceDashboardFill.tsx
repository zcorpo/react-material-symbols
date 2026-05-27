import type { SVGProps, JSX } from 'react'

export default function SpaceDashboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h304.62v640H160Zm335.38-351v-289H800v289H495.38ZM800-160H495.38v-320.23H800V-160Z" />
    </svg>
  )
}
