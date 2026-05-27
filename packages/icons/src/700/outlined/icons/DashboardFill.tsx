import type { SVGProps, JSX } from 'react'

export default function DashboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M504-581v-304h381v304H504ZM75-431v-454h381v454H75ZM504-77v-455h381v455H504ZM75-77v-305h381v305H75Z" />
    </svg>
  )
}
