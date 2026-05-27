import type { SVGProps } from 'react'

export default function Tabs({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-22h572v-322H194v322Zm0-344h572v-228H194v228Zm310-117h225v-74H504v74ZM194-538v-228 228Z" />
    </svg>
  )
}
