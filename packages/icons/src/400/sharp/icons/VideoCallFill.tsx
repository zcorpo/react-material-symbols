import type { SVGProps, JSX } from 'react'

export default function VideoCallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M372-320h60v-132h132v-60H432v-132h-60v132H240v60h132v132ZM80-160v-640h640v275l160-160v410L720-435v275H80Z" />
    </svg>
  )
}
