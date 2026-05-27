import type { SVGProps, JSX } from 'react'

export default function ResumeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-240v-480h60v480h-60Zm174 0 385-240-385-240v480Z" />
    </svg>
  )
}
