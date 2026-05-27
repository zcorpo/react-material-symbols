import type { SVGProps } from 'react'

export default function DesktopMacFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M328.65-105.87v-41.22l84-85H65.87V-854.7H894.7v622.61H547.91l84 85v41.22H328.65Z" />
    </svg>
  )
}
