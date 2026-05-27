import type { SVGProps } from 'react'

export default function BorderBottom({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-94h771v94H95Zm0-169v-95h94v95H95Zm0-169v-94h94v94H95Zm0-169v-95h94v95H95Zm0-169v-95h94v95H95Zm169 338v-94h95v94h-95Zm0-338v-95h95v95h-95Zm169 507v-95h94v95h-94Zm0-169v-94h94v94h-94Zm0-169v-95h94v95h-94Zm0-169v-95h94v95h-94Zm169 338v-94h95v94h-95Zm0-338v-95h95v95h-95Zm169 507v-95h95v95h-95Zm0-169v-94h95v94h-95Zm0-169v-95h95v95h-95Zm0-169v-95h95v95h-95Z" />
    </svg>
  )
}
