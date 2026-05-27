import type { SVGProps } from 'react'

export default function VerticalAlignTop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-769.23V-800h560v30.77H200ZM464.62-160v-450.92L332.85-479.15l-22.23-22.23L480-670.77l167.69 167.69-22.23 22.23-130.08-130.07V-160h-30.76Z" />
    </svg>
  )
}
