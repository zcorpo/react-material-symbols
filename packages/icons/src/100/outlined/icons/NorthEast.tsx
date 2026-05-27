import type { SVGProps } from 'react'

export default function NorthEast({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m228-212-16-16 458-458H361v-22h347v347h-22v-309L228-212Z" />
    </svg>
  )
}
