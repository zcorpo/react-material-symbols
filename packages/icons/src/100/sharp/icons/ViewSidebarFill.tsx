import type { SVGProps } from 'react'

export default function ViewSidebarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M664-584v-164h164v164H664Zm0 186v-164h164v164H664ZM132-212v-536h510v536H132Zm532 0v-164h164v164H664Z" />
    </svg>
  )
}
