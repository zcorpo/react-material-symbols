import type { SVGProps } from 'react'

export default function ResponsiveLayout({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M89-95v-556h227v-226h555v782H89Zm556-94h131v-593H410v131h235v462Zm-235 0h140v-367H410v367Zm-226 0h132v-367H184v367Zm461-462v95-95Zm-329 95Zm234 0Zm95-95Z" />
    </svg>
  )
}
