import type { SVGProps } from 'react'

export default function WindowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-450h344.7v344.13H510V-450Zm0-60v-344.7h344.7V-510H510Zm-60 0H105.87v-344.7H450V-510Zm0 60v344.13H105.87V-450H450Z" />
    </svg>
  )
}
