import type { SVGProps, JSX } from 'react'

export default function ButtonsAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-240v-480h800v480H80Zm60-60h680v-360H140v360Zm147-60h49v-95h95v-50h-95v-95h-49v95h-95v50h95v95Zm-147 60v-360 360Z" />
    </svg>
  )
}
