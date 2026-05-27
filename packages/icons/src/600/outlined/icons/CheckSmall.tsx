import type { SVGProps } from 'react'

export default function CheckSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-303.87 237.39-467.04l56.13-55.57L400-416.13l267.04-266.48 55.57 55.57L400-303.87Z" />
    </svg>
  )
}
