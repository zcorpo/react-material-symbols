import type { SVGProps, JSX } from 'react'

export default function SpaceDashboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-680h317.31v680H140Zm362.69-386v-294H820v294H502.69ZM820-140H502.69v-340.62H820V-140Z" />
    </svg>
  )
}
