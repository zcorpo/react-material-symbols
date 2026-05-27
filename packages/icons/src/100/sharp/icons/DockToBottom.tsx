import type { SVGProps } from 'react'

export default function DockToBottom({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194-194h572v-128H194v128Zm0-150h572v-422H194v422Zm0 22v128-128Zm-22 150v-616h616v616H172Z" />
    </svg>
  )
}
