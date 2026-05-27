import type { SVGProps } from 'react'

export default function OpenInBrowserFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H605v-22h161v-498H194v498h161v22H172Zm297 0v-265l-96 95-16-15 123-123 123 123-16 15-96-95v265h-22Z" />
    </svg>
  )
}
