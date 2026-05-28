import type { SVGProps, JSX } from 'react'

export default function StickyNoteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M630.92-140H140v-680h680v490.92L630.92-140Zm-24.23-45.39 167.92-167.92H606.69v167.92ZM457.31-330.62h45.38V-584h126.69v-45.38H330.62V-584h126.69v253.38Z" />
    </svg>
  )
}
