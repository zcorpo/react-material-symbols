import type { SVGProps } from 'react'

export default function TurnLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M620-160v-368H234l90 90-42 42-162-162 162-162 42 42-90 90h446v428h-60Z" />
    </svg>
  )
}
