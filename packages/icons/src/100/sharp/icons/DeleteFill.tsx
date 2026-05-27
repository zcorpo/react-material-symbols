import type { SVGProps } from 'react'

export default function DeleteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M404-276h22v-372h-22v372Zm130 0h22v-372h-22v372ZM252-172v-557h-40v-22h144v-25h248v25h144v22h-40v557H252Z" />
    </svg>
  )
}
