import type { SVGProps, JSX } from 'react'

export default function DownloadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-315.15 278.39-516.76l48.98-48.5L445.93-446.7v-359.52h68.14v359.52l118.56-118.56 48.98 48.5L480-315.15ZM154.02-154.02v-211.13h68.13v143h515.7v-143h68.37v211.13h-652.2Z" />
    </svg>
  )
}
