import type { SVGProps } from 'react'

export default function EqualFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-273v-134h691v134H135Zm0-280v-134h691v134H135Z" />
    </svg>
  )
}
