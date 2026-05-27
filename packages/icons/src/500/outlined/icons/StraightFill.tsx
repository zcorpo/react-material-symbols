import type { SVGProps } from 'react'

export default function StraightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M445.93-114.02v-602.41l-90 90-47.73-47.74L480-846.22l171.8 172.05-47.73 47.74-90-90v602.41h-68.14Z" />
    </svg>
  )
}
