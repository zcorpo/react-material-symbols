import type { SVGProps } from 'react'

export default function DesktopMacFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M336-120v-35l84-85H80v-600h800v600H540l84 85v35H336Z" />
    </svg>
  )
}
