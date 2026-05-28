import type { SVGProps, JSX } from 'react'

export default function DesktopMac({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M336-120v-35l84-85H80v-600h800v600H540l84 85v35H336ZM140-396h680v-384H140v384Zm0 0v-384 384Z" />
    </svg>
  )
}
