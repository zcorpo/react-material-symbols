import type { SVGProps } from 'react'

export default function MaximizeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-766v-22h536v22H212Z" />
    </svg>
  )
}
