import type { SVGProps } from 'react'

export default function ExpandAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-56 216-320l67-67 197 196 197-196 67 67L480-56ZM283-572l-67-68 264-264 264 264-66 68-198-197-197 197Z" />
    </svg>
  )
}
