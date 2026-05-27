import type { SVGProps } from 'react'

export default function SideNavigation({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm308-22h286v-572H480v572Z" />
    </svg>
  )
}
