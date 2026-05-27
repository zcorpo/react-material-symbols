import type { SVGProps } from 'react'

export default function CameraIndoorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-172v-402l268-202 268 202v402H212Zm135-126h202v-87l72 39v-105l-72 38v-86H347v201Z" />
    </svg>
  )
}
