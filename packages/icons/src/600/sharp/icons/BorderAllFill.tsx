import type { SVGProps } from 'react'

export default function BorderAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-105.87V-450h344.7v344.13H510ZM510-510v-344.7h344.7V-510H510Zm-404.13 0v-344.7H450V-510H105.87Zm0 404.13V-450H450v344.13H105.87Z" />
    </svg>
  )
}
