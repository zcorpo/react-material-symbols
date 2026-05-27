import type { SVGProps } from 'react'

export default function Flag2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-120v-680h560l-88.69 167.85L800-464.31H270.77V-120H240Z" />
    </svg>
  )
}
