import type { SVGProps, JSX } from 'react'

export default function PostFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm44-225h528v-25H216v25Zm0 104h528v-22H216v22Z" />
    </svg>
  )
}
