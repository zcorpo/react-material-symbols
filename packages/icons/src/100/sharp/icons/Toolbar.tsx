import type { SVGProps, JSX } from 'react'

export default function Toolbar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-466h572v-128H194v128Zm572 22H194v422h572v-422Zm-572-22v22-22Zm0 0v-128 128Zm0 22v422-422Z" />
    </svg>
  )
}
