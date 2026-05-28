import type { SVGProps, JSX } from 'react'

export default function TextSelectStartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-95v-94h94v94h-94Zm0-676v-95h94v95h-94ZM602-95v-94h95v94h-95Zm0-676v-95h95v95h-95ZM771-95v-94h95v94h-95Zm0-169v-95h95v95h-95Zm0-169v-94h95v94h-95Zm0-169v-95h95v95h-95Zm0-169v-95h95v95h-95ZM95-95v-94h85v-582H95v-95h263v95h-84v582h84v94H95Z" />
    </svg>
  )
}
