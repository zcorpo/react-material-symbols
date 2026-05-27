import type { SVGProps, JSX } from 'react'

export default function SplitscreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-536.85V-820h680v283.15H140ZM140-140v-283.38h680V-140H140Z" />
    </svg>
  )
}
