import type { SVGProps } from 'react'

export default function HomeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-140v-450l300-225.77L780-590v450H556.15v-267.69h-152.3V-140H180Z" />
    </svg>
  )
}
