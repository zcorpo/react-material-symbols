import type { SVGProps } from 'react'

export default function SplitscreenLandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-280h250v-400H510v400Zm-310 0h250v-400H200v400ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
