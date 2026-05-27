import type { SVGProps } from 'react'

export default function NearMeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m531-206-92-235-235-94-2-12 556-213-215 554h-12Z" />
    </svg>
  )
}
