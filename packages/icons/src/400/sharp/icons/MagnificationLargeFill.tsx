import type { SVGProps, JSX } from 'react'

export default function MagnificationLargeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194-368h481v-318H194v318ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
