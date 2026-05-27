import type { SVGProps } from 'react'

export default function FlipToBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-602h94v508h508v94H95Zm169-169v-95h95v95h-95Zm0-169v-94h95v94h-95Zm0-169v-95h95v95h-95Zm0-169v-95h95v95h-95Zm169 507v-95h94v95h-94Zm0-507v-95h94v95h-94Zm169 0v-95h95v95h-95Zm0 507v-95h95v95h-95Zm169-507v-95h95v95h-95Zm0 507v-95h95v95h-95Zm0-169v-94h95v94h-95Zm0-169v-95h95v95h-95Z" />
    </svg>
  )
}
